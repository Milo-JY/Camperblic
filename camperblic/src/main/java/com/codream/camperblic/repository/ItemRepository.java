package com.codream.camperblic.repository;

import com.codream.camperblic.domain.item.*;

import java.util.List;

public interface ItemRepository {

    List<Cook> findAllCook();

    List<Etc> findAllEtc();

    List<Mat> findAllMat();

    List<Chair> findAllChair();

    List<Tent> findAllTent();
}
