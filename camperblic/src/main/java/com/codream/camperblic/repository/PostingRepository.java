package com.codream.camperblic.repository;

<<<<<<< HEAD
import com.codream.camperblic.domain.community.*;
=======
import com.codream.camperblic.domain.community.Campstory;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcamping;
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c

import java.util.List;

public interface PostingRepository {

    List<Campstory> findCampPostings();
    List<Freeboard> findFreePostings();
    List<Gathercamper> findGatherPostings();
    List<Reviewcamping> findReviewPostings();


    Campstory findCampPostingById(Long id);

    Freeboard findFreePostingById(Long id);

    Gathercamper findGatherPostingById(Long id);

    Reviewcamping findReviewPostingById(Long id);
<<<<<<< HEAD


    Campstory uploadCampPosting(Campstory campstory);

    Freeboard uploadFreePosting(Freeboard freeboard);

    Gathercamper uploadGatherPosting(Gathercamper gathercamper);

    Reviewcamping uploadReviewPosting(Reviewcamping reviewcamping);

    //글 수정
    <T extends BaseEntity> T editPosting(Class<T> clazz, Long id, T posting);

    //글 삭제
    boolean deletePosting(String category, Long id);

    //조회수 증가
    public void increaseViewCount(String category, Long id);
=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
}
