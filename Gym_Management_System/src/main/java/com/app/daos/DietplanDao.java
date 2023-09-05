package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Dietplan;

public interface DietplanDao extends JpaRepository<Dietplan, Integer> {

}
