package com.codream.camperblic.controller;

import com.codream.camperblic.domain.login.Member;
import com.codream.camperblic.service.MemberService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;
//    private final JwtUtil jwtUtil;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public MemberController(MemberService memberService ,PasswordEncoder passwordEncoder /*, JwtUtil jwtUtil*/){
        this.memberService =memberService;
        this.passwordEncoder = passwordEncoder;
//        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Member member, HttpSession session, HttpServletResponse response){
         try {
             String userId = member.getMember_id();
             String userPw = member.getPassword();
             System.out.println("id" +userId + "pw" +userPw );
             Member foundMember = memberService.findByUserId(userId)
                     .orElseThrow(()->new IllegalArgumentException("사용자를 찾을 수 없습니다.")  );
             if (!userPw.equals(foundMember.getPassword())) {
                 throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
             }
             // 시큐리티 버전
//             if (!passwordEncoder.matches(userPw, foundMember.getPassword())) {
//                 throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
//             }

             // 세션에 로그인 정보 저장
             session.setAttribute("name", foundMember.getName());

             // JWT 토큰 생성
//             String token = jwtUtil.generateToken(foundMember.getName());
//
//             // JWT 토큰을 쿠키로 설정
//             Cookie tokenCookie = new Cookie("token", token);
//             tokenCookie.setPath("/");
//             tokenCookie.setHttpOnly(true);
//             response.addCookie(tokenCookie);

             return ResponseEntity.ok("로그인 성공");
         }catch(Exception e){
             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
         }
    }
    @PostMapping("/signinUser")
    public ResponseEntity<String> signin(@RequestBody Member member){
        try{
            String encodePw = passwordEncoder.encode(member.getPassword());
            Member user = new Member();
            user.setMember_id(member.getMember_id());
            user.setPassword(encodePw);
            user.setName(member.getName());
            user.setEmail(member.getEmail());
            user.setPhone(member.getPhone());
            memberService.saveUser(user);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

}
