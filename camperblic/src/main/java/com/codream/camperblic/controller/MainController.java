package com.codream.camperblic.controller;

import com.codream.camperblic.domain.community.Campstory;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcamping;
import com.codream.camperblic.service.PostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainController {
    private final PostingService postingService;

    @Autowired
    public MainController(PostingService postingService) {
        this.postingService = postingService;
    }

    // 게시글 리스트 조회
    @GetMapping("/campstory")
    public List<Campstory> getCampstoryPostings() {
        return postingService.findCampPostings();
    }

    @GetMapping("/freeboard")
    public List<Freeboard> getFreeboardPostings() {
        return postingService.findFreePostings();
    }

    @GetMapping("/gathercamper")
    public List<Gathercamper> getGathercamperPostings() {
        return postingService.findGatherPostings();
    }

    @GetMapping("/reviewcamping")
    public List<Reviewcamping> getReviewcampingPostings() {
        return postingService.findReviewPostings();
    }

    //게시글 조회
    @GetMapping("/boarddetail/{category}/{id}")
    public Object getPostingDetail(@PathVariable("category") String category, @PathVariable("id") Long id) {
        if (category.equals("campstory")) {
            return postingService.findCampPostingDetail(id);
        } else if (category.equals("freeboard")) {
            return postingService.findFreePostingDetail(id);
        } else if (category.equals("gathercamper")) {
            return postingService.findGatherPostingDetail(id);
        } else if (category.equals("reviewcamping")) {
            return postingService.findReviewPostingDetail(id);
        } else {
            throw new IllegalArgumentException("Invalid category: " + category);
        }
    }

    //게시글 등록
    @PostMapping("/write/campstory")
    public String boardPosting(@RequestBody Campstory campstory) {
        postingService.uploadCampPosting(campstory);
        return "게시글이 성공적으로 등록되었습니다.";
    }

    @PostMapping("/write/freeboard")
    public String boardPosting(@RequestBody Freeboard freeboard) {
        postingService.uploadFreePosting(freeboard);
        return "게시글이 성공적으로 등록되었습니다.";
    }

    @PostMapping("/write/gathercamper")
    public String boardPosting(@RequestBody Gathercamper gathercamper) {
        postingService.uploadGatherPosting(gathercamper);
        return "게시글이 성공적으로 등록되었습니다.";
    }

    @PostMapping("/write/reviewcamping")
    public String boardPosting(@RequestBody Reviewcamping reviewcamping) {
        postingService.uploadReviewPosting(reviewcamping);
        return "게시글이 성공적으로 등록되었습니다.";
    }

    //게시글 수정
    @PutMapping("/edit/campstory")
    public String editCampstoryPosting(@RequestBody Campstory posting, @RequestParam("id") Long id) {
        postingService.editCampPosting(id, posting);
        return "게시글이 성공적으로 수정되었습니다.";
    }

    @PutMapping("/edit/freeboard")
    public String editFreeboardPosting(@RequestBody Freeboard posting, @RequestParam("id") Long id) {
        postingService.editFreePosting(id, posting);
        return "게시글이 성공적으로 수정되었습니다.";
    }

    @PutMapping("/edit/gathercamper")
    public String editGathercamperPosting(@RequestBody Gathercamper posting, @RequestParam("id") Long id) {
        postingService.editGatherPosting(id, posting);
        return "게시글이 성공적으로 수정되었습니다.";
    }

    @PutMapping("/edit/reviewcamping")
    public String editReviewcampingPosting(@RequestBody Reviewcamping posting, @RequestParam("id") Long id) {
        postingService.editReviewPosting(id, posting);
        return "게시글이 성공적으로 수정되었습니다.";
    }

    //게시글 삭제
    @DeleteMapping("/delete-posting")
    public String deletePosting(@RequestParam("category") String category,
                                @RequestParam("id") Long id) {
        postingService.deletePosting(category, id);
        return "게시글이 성공적으로 삭제되었습니다.";
    }

    //조회수 증가
    @PutMapping("/increase-view")
    public ResponseEntity<String> increaseViewCount(@RequestParam("category") String category,
                                                    @RequestParam("id") Long id) {
        System.out.println("category = " + category);
        postingService.increaseViews(category, id);
        return ResponseEntity.ok("View count increased successfully");
    }

}