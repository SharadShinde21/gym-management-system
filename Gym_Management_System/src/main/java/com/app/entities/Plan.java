package com.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="plan")
public class Plan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int subplanId;
	private String planName;
	private int duration;
	private int amount;
	/*
	 * @OneToOne(mappedBy = "plan") private GymMember gymmember;
	 */
	public Plan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Plan(int subplanId, String planName, int duration, int amount) {
		super();
		this.subplanId = subplanId;
		this.planName = planName;
		this.duration = duration;
		this.amount = amount;
	}
	public int getSubplanId() {
		return subplanId;
	}
	public void setSubplanId(int subplanId) {
		this.subplanId = subplanId;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "Plan [subplanId=" + subplanId + ", planName=" + planName + ", duration=" + duration + ", amount="
				+ amount + "]";
	}
	

}
