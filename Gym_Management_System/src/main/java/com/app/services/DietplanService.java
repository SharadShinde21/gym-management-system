package com.app.services;

import java.util.List;

import com.app.entities.Dietplan;

public interface DietplanService {
	
	Dietplan findById(int planid);
    List<Dietplan>findAll();
    Dietplan save(Dietplan dp);
    Dietplan  update(Dietplan dp);
    void deleteById(int planid);

}
