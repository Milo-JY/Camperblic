package com.codream.camperblic.repository;

import com.codream.camperblic.domain.community.Campstoryboard;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcampingsite;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class JpaPostingRepository implements PostingRepository{

    private final EntityManager em;

    public JpaPostingRepository(EntityManager em) {
        this.em = em;
    }

//  findAll 메서드
    @Override
    public List<Campstoryboard> findCampPostings() {
        return em.createQuery("select p from Campstoryboard p", Campstoryboard.class)
                .getResultList();
    }

    @Override
    public List<Freeboard> findFreePostings() {
        return em.createQuery("select p from Freeboard p", Freeboard.class)
                .getResultList();
    }

    @Override
    public List<Gathercamper> findGatherPostings() {
        return em.createQuery("select p from Gathercamper p", Gathercamper.class)
                .getResultList();
    }

    @Override
    public List<Reviewcampingsite> findReviewPostings() {
        return em.createQuery("select p from Reviewcampingsite p", Reviewcampingsite.class)
                .getResultList();
    }// findAll 메서드 끝


    @Override
    public Campstoryboard findCampPostingById(Long id) {
        return em.find(Campstoryboard.class, id);
    }
}
