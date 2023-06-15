package com.codream.camperblic.service;

import com.codream.camperblic.domain.login.Member;
import com.codream.camperblic.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {this.memberRepository = memberRepository;}

    public Optional<Member> findByUserId(String member_id) {return memberRepository.findByUserId(member_id);}

    public Member saveUser(Member member) {return  memberRepository.saveUser(member);}
}
