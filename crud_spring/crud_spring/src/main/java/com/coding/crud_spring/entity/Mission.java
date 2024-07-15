package com.coding.crud_spring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "mission")
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "endDate", nullable = false)
    private String endDate;

    @Column(name = "freeDays", nullable = false)
    private int freeDays;

    @Column(name = "isForMe", nullable = false)
    private boolean isForMe;

    @Column(name = "sellDays", nullable = false)
    private boolean sellDays;
    @Column(name = "shareMission", nullable = false)
    private boolean shareMission;
    @Column(name = "startDate", nullable = false)
    private String startDate;
    @Column(name = "tjm", nullable = false)
    private int tjm;

    public boolean getIsForMe() {
        return isForMe;
    }

    public void setIsForMe(boolean isForMe) {
        this.isForMe = isForMe;
    }

}
