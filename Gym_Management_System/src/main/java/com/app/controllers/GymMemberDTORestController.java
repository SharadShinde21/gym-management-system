package com.app.controllers;


import java.util.Date;
import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.GymMemberDTO;
import com.app.entities.GymMember;
import com.app.entities.Plan;
import com.app.entities.User;
import com.app.services.GymMemberService;
import com.app.services.PlanService;
import com.app.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/gym")
public class GymMemberDTORestController {
	
	@Autowired
	private GymMemberService gymMemberService;

	@Autowired
	private UserService userService;

	@Autowired
	private PlanService planService;
//	      @GetMapping("/gymmembers")
//	  	public ResponseEntity<?> findById(@PathVariable("id") int id) {
//	  		Book b =  bookService.findById(id);
//	  		return ResponseEntity.ok(BookDTO.fromEntity(b));
//	  	}

	@PostMapping("/gymmemberdtos")
	public ResponseEntity<?> saveDetails(GymMemberDTO dto){ // data input as form-data, so no
																			// @RequestBody
		System.out.println("inside DTO");
		System.out.println(dto.toString());
		User u = (User) userService.findById(dto.getUser_id());
		System.out.println("user: " + u.toString());

		Plan p = planService.findById(dto.getSubplanId());
		System.out.println("plan: " + p.toString());

		GymMember b = GymMemberDTO.toEntity(dto);
		System.out.println("gymmember :" + b.toString());
		b.setUser(u);
		b.setPlan(p);
		b.setJoinDate( new Date());
		// b = gymMemberservice.save(b);
		GymMember newGymMember = gymMemberService.save(b);

		GymMemberDTO newDto = GymMemberDTO.fromEntity(newGymMember);
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", newDto);
		return ResponseEntity.ok(result);
		// return Response.success(b);

	}

}
