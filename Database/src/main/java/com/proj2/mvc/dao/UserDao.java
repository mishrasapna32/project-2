package com.proj2.mvc.dao;



import com.proj2.mvc.model.User;

public interface UserDao {
	User authenticate(User user);
	void updateUser(User user);
	User registerUser(User user);
}
