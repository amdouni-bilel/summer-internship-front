package com.coding.crud_spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MissionUserDTO {
    private Long missionId;
    private String missionName;
}
