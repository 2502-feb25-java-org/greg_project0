package com.revature;

class Greeter {
    private String name;
    // public Greeter() { //No Args constructor
    //     name = "Greg Hadjiyane";
    // }

    public Greeter(String n) { //Paramaterized constructor
        this.name = n;
    }

    public String getName() {
        //return name;
        return this.name;
    }

    public void setName(String n) {
        this.name = n;
    }

}

//Naming Convention: 
//Packages = small.case 
//Classes and Interfaces = ProperCase
//Variables($, _, 1) and Methods = camelCase
//Constants = UPPERCASE
abstract class Person {
    String name; //variables
    String ssn;
    final String SPECIESID = "HOMOSAPIENS"; //constant
    public Person(String n, String s) {
        this.name = n;
        this.ssn = s;
    }

    protected abstract String getMoreDetails(); //Method declaration

    String getDetails() {
        return (name + " " + ssn + " " + SPECIESID);
    }
}

//Employee extends the Person class
class Employee extends Person {
    double salary;
    public Employee(String n, String s, double sal) {
        super(n, s);
        this.salary = sal;
    }

    @Override
    public String getDetails() {
        return ("Name: " + name + "   SSN: " + ssn + "   Species: " + SPECIESID + "   Salary: " + salary);
    }

    @Override
    public String getMoreDetails() {
        return ("Name: " + name + "   SSN: " + ssn + "   Salary: " + salary);
    }
}