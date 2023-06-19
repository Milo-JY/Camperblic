package com.codream.camperblic.repository;

<<<<<<< HEAD
<<<<<<< HEAD
import com.codream.camperblic.domain.community.*;
=======
=======
>>>>>>> parent of aa1166d (minsu)
import com.codream.camperblic.domain.community.Campstory;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcamping;
<<<<<<< HEAD
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
>>>>>>> parent of aa1166d (minsu)
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
    public List<Campstory> findCampPostings() {
        return em.createQuery("select p from Campstory p ORDER BY p.id DESC", Campstory.class)
                .getResultList();
    }

    @Override
    public List<Freeboard> findFreePostings() {
        return em.createQuery("select p from Freeboard p ORDER BY p.id DESC", Freeboard.class)
                .getResultList();
    }

    @Override
    public List<Gathercamper> findGatherPostings() {
        return em.createQuery("select p from Gathercamper p ORDER BY p.id DESC", Gathercamper.class)
                .getResultList();
    }

    @Override
    public List<Reviewcamping> findReviewPostings() {
        return em.createQuery("select p from Reviewcamping p ORDER BY p.id DESC", Reviewcamping.class)
                .getResultList();
    }// findAll 메서드 끝


    @Override
    public Campstory findCampPostingById(Long id) {
        return em.find(Campstory.class, id);
    }

    @Override
    public Freeboard findFreePostingById(Long id) {
        return em.find(Freeboard.class, id);
    }

    @Override
    public Gathercamper findGatherPostingById(Long id) {
        return em.find(Gathercamper.class, id);
    }

    @Override
    public Reviewcamping findReviewPostingById(Long id) {
        return em.find(Reviewcamping.class, id);
<<<<<<< HEAD
    }
<<<<<<< HEAD

    //upload

    @Override
    public Campstory uploadCampPosting(Campstory campstory) {
        em.persist(campstory);
        return campstory;
    }

    @Override
    public Freeboard uploadFreePosting(Freeboard freeboard) {
        em.persist(freeboard);
        return freeboard;
    }

    @Override
    public Gathercamper uploadGatherPosting(Gathercamper gathercamper) {
        em.persist(gathercamper);
        return gathercamper;
    }

    @Override
    public Reviewcamping uploadReviewPosting(Reviewcamping reviewcamping) {
        em.persist(reviewcamping);
        return reviewcamping;
    }

    // 글 수정

    public <T extends BaseEntity> T editPosting(Class<T> clazz, Long id, T camp) {
        Query query = em.createQuery("UPDATE " + clazz.getSimpleName() + " c SET c.title = :title, c.content = :content WHERE c.id = :id");
        query.setParameter("title", camp.getTitle());
        query.setParameter("content", camp.getContent());
        query.setParameter("id", id);
        int updatedCount = query.executeUpdate();

        if (updatedCount > 0) {
            return em.find(clazz, id);
        } else {
            return null;
        }
    }

    //글 삭제
    @Override
    public boolean deletePosting(String category, Long id) {
        Object entity = null;
        if (category.equals("campstory")) {
            entity = em.find(Campstory.class, id);
        } else if (category.equals("freeboard")) {
            entity = em.find(Freeboard.class, id);
        } else if (category.equals("gathercamper")) {
            entity = em.find(Gathercamper.class, id);
        } else if (category.equals("reviewcamping")) {
            entity = em.find(Reviewcamping.class, id);
        }

        if (entity != null) {
            em.remove(entity);
            return true;
        }

        return false;
    }

    //조회수 증가
    public void increaseViewCount(String category, Long id) {
        if (category.equals("campstory")) {
            Campstory campstory = em.find(Campstory.class, id);
            if (campstory != null) {
                campstory.setViews(campstory.getViews() + 1);
                em.merge(campstory);
            }
        } else if (category.equals("freeboard")) {
            Freeboard freeboard = em.find(Freeboard.class, id);
            if (freeboard != null) {
                freeboard.setViews(freeboard.getViews() + 1);
                em.merge(freeboard);
            }
        } else if (category.equals("gathercamper")) {
            Gathercamper gathercamper = em.find(Gathercamper.class, id);
            if (gathercamper != null) {
                gathercamper.setViews(gathercamper.getViews() + 1);
                em.merge(gathercamper);
            }
        } else if (category.equals("reviewcamping")) {
            Reviewcamping reviewcamping = em.find(Reviewcamping.class, id);
            if (reviewcamping != null) {
                reviewcamping.setViews(reviewcamping.getViews() + 1);
                em.merge(reviewcamping);
            }
        }
=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    }
=======
>>>>>>> parent of aa1166d (minsu)
}
