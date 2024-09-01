package com.coding.crud_spring.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Data
@Table(name = "contacts")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fname;
    private String lname;
    private String societe;
    private String socadd;
    private String soctlph;
    private String tlph;
    private String post;
    private String comment;
    private String image;
    private String qr_code;
}
