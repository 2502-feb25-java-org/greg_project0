package com.revature.pojos;

public class User {
	
	private String username;
	private String password;
	private String note;
	
	public User(String username, String password, String note) {
		super();
		this.username = username;
		this.password = password;
		this.note = note;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}

}
