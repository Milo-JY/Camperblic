package com.codream.camperblic.domain.community;

<<<<<<< HEAD
<<<<<<< HEAD
import jakarta.persistence.*;
=======
=======
>>>>>>> parent of aa1166d (minsu)
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
>>>>>>> parent of aa1166d (minsu)

import java.time.LocalDateTime;

@Entity
<<<<<<< HEAD
<<<<<<< HEAD
@Table(name = "reviewcamping")
public class Reviewcamping extends BaseEntity {

=======
public class Reviewcamping {

=======
public class Reviewcamping {

>>>>>>> parent of aa1166d (minsu)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String name;
    private LocalDateTime createdate;
    private Integer views;
    private String content;

    private String category;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getCreatedate() {
        return createdate;
    }

    public void setCreatedate(LocalDateTime createdate) {
        this.createdate = createdate;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
<<<<<<< HEAD
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
>>>>>>> parent of aa1166d (minsu)
}
