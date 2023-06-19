package com.codream.camperblic.repository;

import com.codream.camperblic.domain.item.*;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class JpaItemRepository implements ItemRepository {

    private final EntityManager em;

    public JpaItemRepository(EntityManager em) {
        this.em = em;
    }


    @Override
    public List<Cook> findAllCook() {
        return em.createQuery("select c from Cook c", Cook.class)
                .getResultList();
    }

    @Override
    public List<Etc> findAllEtc() {
        return em.createQuery("select e from Etc e", Etc.class)
                .getResultList();
    }

    @Override
    public List<Mat> findAllMat() {
        return em.createQuery("select m from Mat m", Mat.class)
                .getResultList();
    }

    @Override
    public List<Chair> findAllChair() {
        return em.createQuery("select t from Chair t", Chair.class)
                .getResultList();
    }

    @Override
    public List<Tent> findAllTent() {
        return em.createQuery("select f from Tent f", Tent.class)
                .getResultList();
    }

}
