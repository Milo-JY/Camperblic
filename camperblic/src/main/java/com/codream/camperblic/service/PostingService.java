package com.codream.camperblic.service;

import com.codream.camperblic.domain.community.Campstoryboard;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcampingsite;
import com.codream.camperblic.repository.PostingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostingService {

    private final PostingRepository postingRepository;

    public PostingService(PostingRepository postingRepository) {
        this.postingRepository = postingRepository;
    }

    public List<Campstoryboard> findCampPostings() {
        return postingRepository.findCampPostings();
    }

    public List<Freeboard> findFreePostings() {
        return postingRepository.findFreePostings();
    }

    public List<Gathercamper> findGatherPostings() {
        return postingRepository.findGatherPostings();
    }

    public List<Reviewcampingsite> findReviewPostings() {
        return postingRepository.findReviewPostings();
    }

    public Campstoryboard findCampPostingDetail(Long id) {
        return postingRepository.findCampPostingById(id);
    }
}
