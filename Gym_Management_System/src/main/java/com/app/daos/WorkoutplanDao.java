package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Workoutplan;

public interface WorkoutplanDao extends JpaRepository<Workoutplan, Integer> {

}
