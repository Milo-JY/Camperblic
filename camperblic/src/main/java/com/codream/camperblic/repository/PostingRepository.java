package com.codream.camperblic.repository;

import com.codream.camperblic.domain.community.Campstoryboard;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcampingsite;

import java.util.List;

public interface PostingRepository {

    List<Campstoryboard> findCampPostings();
    List<Freeboard> findFreePostings();
    List<Gathercamper> findGatherPostings();
    List<Reviewcampingsite> findReviewPostings();
    Campstoryboard findCampPostingById(Long id);
}
