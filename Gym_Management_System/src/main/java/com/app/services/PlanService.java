package com.app.services;

import java.util.List;

import com.app.entities.Plan;

public interface PlanService {
	
	 Plan findById(int subplanId);
	    List<Plan>findAll();
	    Plan save(Plan pl);
	    Plan update(Plan pl);
	    void deleteById(int subplanId);
	  //  public Plan authenticate(String email, String password);
	  // Plan findByEmail(String email);
	  //	List<Plan> findByRole(String role) ;

}
