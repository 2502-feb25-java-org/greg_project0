package com.revature.servlets;

import javax.servlet.GenericServlet;

public class HelloServlet extends GenericServlet {
	
	@Override
	public void service(ServletRequest req, ServletResponse res)
		throws ServletException, IOException {
		System.out.println("In Hello Servlet (Generic Servlet) service method!");
	}
	
	PrintWriter writer = res.getWriter();
	
	writer.write("Hello Servlet World!");
	
}