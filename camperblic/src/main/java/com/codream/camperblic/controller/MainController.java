package com.codream.camperblic.controller;

import com.codream.camperblic.domain.community.Campstoryboard;
import com.codream.camperblic.domain.community.Freeboard;
import com.codream.camperblic.domain.community.Gathercamper;
import com.codream.camperblic.domain.community.Reviewcampingsite;
import com.codream.camperblic.domain.item.*;
import com.codream.camperblic.service.ItemService;
import com.codream.camperblic.service.PostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    private ItemService itemService;
    private PostingService postingService;

    @Autowired
    public MainController(ItemService itemService,
                               PostingService postingService) {
        this.itemService = itemService;
        this.postingService = postingService;
    }

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
    }

    @GetMapping("/campstory")
    public List<Campstoryboard> campstory() {
        return postingService.findCampPostings();
    }

    @GetMapping("/freeboard")
    public List<Freeboard> freeboard() {
        return postingService.findFreePostings();
    }

    @GetMapping("/gathercamper")
    public List<Gathercamper> gathercamper() {
        return postingService.findGatherPostings();
    }

    @GetMapping("/reviewcampingsite")
    public List<Reviewcampingsite> reviewcampingsite() {
        return postingService.findReviewPostings();
    }
}
