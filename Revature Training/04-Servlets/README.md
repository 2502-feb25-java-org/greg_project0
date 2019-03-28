# Servlets!

This application will cover the basics of Java Servlets,
which allow us to process web requests and produce responses

## A few facts about Servlets:
 - javax.servlet package
 - The servlet hierarchy is as follows: 'Servlet' (interface) -> 
 	'GenericServlet' (abstract class) -> 'HttpServlet' (abstarct class)
 - The servlet lifecycle is init() -> service() -> destroy()
 
## To recreate this app:
 - Create a new Maven project
 - Simple project (skip archetype selection)
 - Package: war
 - Copy the POM in this app (the dependencies 
 	and the package at Java 1.8)
 - Right click on project --> Java EE tools --> Generate deployment descriptor stub
 - This will create your `web.xml` which can be found in src > main > webapp > WEB-INF 
 - Create servlet classes 
		* create class that extends either GenericServlet or HttpServlet
		* follow guidelines in this application's web.xml