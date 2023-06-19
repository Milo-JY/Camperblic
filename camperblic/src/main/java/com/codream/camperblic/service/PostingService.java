package com.codream.camperblic.service;

import com.codream.camperblic.domain.community.Campstory;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcamping;
import com.codream.camperblic.repository.PostingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostingService {

    private final PostingRepository postingRepository;

    public PostingService(PostingRepository postingRepository) {
        this.postingRepository = postingRepository;
    }

<<<<<<< HEAD
    // find list
=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    public List<Campstory> findCampPostings() {
        return postingRepository.findCampPostings();
    }

    public List<Freeboard> findFreePostings() {
        return postingRepository.findFreePostings();
    }

    public List<Gathercamper> findGatherPostings() {
        return postingRepository.findGatherPostings();
    }

    public List<Reviewcamping> findReviewPostings() {
        return postingRepository.findReviewPostings();
    }

<<<<<<< HEAD
    // find detail
=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    public Campstory findCampPostingDetail(Long id) {
        return postingRepository.findCampPostingById(id);
    }

    public Freeboard findFreePostingDetail(Long id) {
        return postingRepository.findFreePostingById(id);
    }

    public Gathercamper findGatherPostingDetail(Long id) {
        return postingRepository.findGatherPostingById(id);
    }

    public Reviewcamping findReviewPostingDetail(Long id) {
        return postingRepository.findReviewPostingById(id);
    }
<<<<<<< HEAD

    // 글 등록
    public Campstory uploadCampPosting(Campstory campstory) {
        return postingRepository.uploadCampPosting(campstory);
    }

    public Freeboard uploadFreePosting(Freeboard freeboard) {
        return postingRepository.uploadFreePosting(freeboard);
    }

    public Gathercamper uploadGatherPosting(Gathercamper gathercamper) {
        return postingRepository.uploadGatherPosting(gathercamper);
    }

    public Reviewcamping uploadReviewPosting(Reviewcamping reviewcamping) {
        return postingRepository.uploadReviewPosting(reviewcamping);
    }

    //글 수정

    public Campstory editCampPosting(Long id, Campstory campstory) {
        return postingRepository.editPosting(Campstory.class, id, campstory);
    }

    public Freeboard editFreePosting(Long id, Freeboard freeboard) {
        return postingRepository.editPosting(Freeboard.class, id, freeboard);
    }

    public Gathercamper editGatherPosting(Long id, Gathercamper gathercamper) {
        return postingRepository.editPosting(Gathercamper.class, id, gathercamper);
    }

    public Reviewcamping editReviewPosting(Long id, Reviewcamping reviewcamping) {
        return postingRepository.editPosting(Reviewcamping.class, id, reviewcamping);
    }

    // 게시글 삭제
    public boolean deletePosting(String category, Long id) {
        postingRepository.deletePosting(category, id);
        return true;
    }

    // 조회수 증가
    public boolean increaseViews(String category, Long id) {
        postingRepository.increaseViewCount(category, id);
        return true;
    }
=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
}
