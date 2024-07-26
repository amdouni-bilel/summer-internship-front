package com.coding.crud_spring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors(chain = true)
@Table(name = "conges")
public class Conges {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "jours_cong", nullable = false)
    private int joursCong;

    @Column(name = "date_debut", nullable = false)
    private String dateDebut;

    @Column(name = "confirmed", nullable = false)
    private boolean confirmed;

    public Conges(User user, int joursCong, String dateDebut) {
        this.user = user;
        this.joursCong = joursCong;
        this.dateDebut = dateDebut;
        this.confirmed = false;
    }
}
