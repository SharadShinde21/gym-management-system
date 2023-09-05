package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.GymMember;

public interface GymMemberDao extends JpaRepository<GymMember, Integer> {
	
	//GymMember findByEmail(String email);
		//List<GymMember> findByRole(String role);

}
