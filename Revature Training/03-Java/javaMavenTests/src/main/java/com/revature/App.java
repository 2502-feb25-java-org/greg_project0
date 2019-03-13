package com.revature; //User defined package
//import java.lang.*; //Call to external or internal prebuilt Java packages

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        /*
        Greeter greet = new Greeter("Greg");
        System.out.println( "Hello " + greet.getName());
        greet.setName("Greg H");
        String name = greet.getName();
        System.out.println( "Hello " + name);
        */

        //Person p = new Person("Greg Hadjiyane", "000123");
        //System.out.println(p.getDetails());

        Employee emp = new Employee("Steve", "12345678", 200.50);
        Person emp1 = new Employee("Mike", "314613", 567.50); //Upcasting
        //Employee emp2 = (Employee)new Person("Alex", "567232"); //Downcasting
        Employee emp3 = (Employee)emp1; //Valid Downcasting
        System.out.println(emp.getDetails());
        System.out.println(emp1.getDetails());
        //System.out.println(emp2.getDetails());
        System.out.println(emp3.getDetails());

    }
}
