package com.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="dietplan")
public class Dietplan {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int planid;
	 private String planname;
	 private String breakfast;
	 private String lunch;
	 private String preworkout;
	 private String dinner;
	public Dietplan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Dietplan(int planid, String planname, String breakfast, String lunch, String preworkout, String dinner) {
		super();
		this.planid = planid;
		this.planname = planname;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.preworkout = preworkout;
		this.dinner = dinner;
	}
	public int getPlanid() {
		return planid;
	}
	public void setPlanid(int planid) {
		this.planid = planid;
	}
	public String getPlanname() {
		return planname;
	}
	public void setPlanname(String planname) {
		this.planname = planname;
	}
	public String getBreakfast() {
		return breakfast;
	}
	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}
	public String getLunch() {
		return lunch;
	}
	public void setLunch(String lunch) {
		this.lunch = lunch;
	}
	public String getPreworkout() {
		return preworkout;
	}
	public void setPreworkout(String preworkout) {
		this.preworkout = preworkout;
	}
	public String getDinner() {
		return dinner;
	}
	public void setDinner(String dinner) {
		this.dinner = dinner;
	}
	@Override
	public String toString() {
		return "Dietplan [planid=" + planid + ", planname=" + planname + ", breakfast=" + breakfast + ", lunch=" + lunch
				+ ", preworkout=" + preworkout + ", dinner=" + dinner + "]";
	}
	
	 

}
