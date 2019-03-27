package com.revature.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.pojos.User;
import com.revature.service.UserService;

//make accessible at endpoint http
public class MyHttpServlet extends HttpServlet {
	
	private static Logger log = Logger.getLogger(MyHttpServlet.class);
	static UserService service = new UserService();
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		log.info("in HTTP servlet --GET");
		PrintWriter writer = resp.getWriter();
		writer.write("GET method response");
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		
		User user = service.getByUsername(username);
		
		PrintWriter writer = resp.getWriter();
		resp.setContentType("text/html");
		String output = "";
		
		if(user == null) {
			//no user with that name exists
			output = "<b>Incorrect user credentials.  Please try again!</b>";
			
		}
		else {
			//User exists, must check the password
			if(password.equals(user.getPassword())) {
				//User has logged in successfully (here is where we would add user to session)
				output = "<h1>Welcome, " + user.getUsername() +
						"!</h1> <br> " + user.getNote();
				
			}
			else {
				//Unsuccessful login with wrong password
				output = "<b>Incorrect user credentials.  Please try again!</b>";
			}
		}
	}
	
}









