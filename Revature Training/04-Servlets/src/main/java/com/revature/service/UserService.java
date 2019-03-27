package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import com.revature.pojos.User;

public class UserService {
	private static List<User> users = new ArrayList<User>();
	
	static {
		users.add(new User("greg", "123", "He's pretty ok I guess"));
	}
	
	public List<User> getAll() {
		return users;
	}
	
	public User getByUsername(String name) {
		
		return users.stream()
		.filter(u -> u.getUsername().equalsIgnoreCase(name))
		.findFirst()
		.orElse(null);
	}
}
