package com.codream.camperblic.repository;

import com.codream.camperblic.domain.login.Member;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Repository
public class JpaMemberRepository implements MemberRepository {


    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Optional<Member> findByUserId(String member_id) {
        Member member = em.createQuery("select m from Member  m where m.member_id = :member_id ", Member.class).
                setParameter("member_id",member_id).getSingleResult();
        return Optional.ofNullable(member);
    }

    @Override
    public Member saveUser(Member member) {
        em.persist(member);
        return member;
    }


}
