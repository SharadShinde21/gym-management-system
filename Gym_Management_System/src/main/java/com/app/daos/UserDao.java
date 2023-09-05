package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByEmail(String email);
	List<User> findByRole(String role);

}
