package com.codream.camperblic.controller;

import com.codream.camperblic.domain.item.*;
import com.codream.camperblic.service.ItemService;
import com.codream.camperblic.service.PostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    private ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    // 신준이 컨트롤러
<<<<<<< HEAD
=======



>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    @GetMapping("/cook")
    public List<Cook> cooks() {
        return itemService.findCooks();
    }

    @GetMapping("/etc")
    public List<Etc> etc() {
        return itemService.findEtc();
    }

    @GetMapping("/mat")
    public List<Mat> mat() {
        return itemService.findMat();
    }

    @GetMapping("/chair")
    public List<Chair> chair() {
        return itemService.findChair();
    }

    @GetMapping("/tent")
    public List<Tent> tent() {
        return itemService.findTent();
    } // 신준이 컨트롤러 끝
}
