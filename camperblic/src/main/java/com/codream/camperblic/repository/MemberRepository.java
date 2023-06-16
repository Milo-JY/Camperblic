package com.codream.camperblic.repository;

import com.codream.camperblic.domain.login.Member;
import jakarta.transaction.Transactional;

import java.util.Optional;

public interface MemberRepository {

    Optional<Member> findByUserId(String member_id);
    @Transactional
    Member saveUser(Member member);

}
