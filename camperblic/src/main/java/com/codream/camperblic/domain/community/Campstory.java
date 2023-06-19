package com.codream.camperblic.domain.community;

import jakarta.persistence.*;

import java.time.LocalDateTime;

<<<<<<< HEAD
@Entity
@Table(name = "campstory")
public class Campstory extends BaseEntity{

}
=======
<<<<<<<< HEAD:camperblic/src/main/java/com/codream/camperblic/domain/community/BaseEntity.java
@MappedSuperclass
public abstract class BaseEntity {
========
@Entity
public class Campstory {
>>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c:camperblic/src/main/java/com/codream/camperblic/domain/community/Campstory.java

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long id;

    @Column(updatable = false)
    private String title;

    @Column(updatable = false)
    private String name;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createdate;

    @Column(insertable = false)
    private Integer views;

    private String content;

<<<<<<<< HEAD:camperblic/src/main/java/com/codream/camperblic/domain/community/BaseEntity.java
    @Column(insertable = false, updatable = false)
========
>>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c:camperblic/src/main/java/com/codream/camperblic/domain/community/Campstory.java
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
}
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
