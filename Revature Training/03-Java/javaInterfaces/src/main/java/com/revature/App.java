package com.revature;

public class App 
{
    public static void main( String[] args )
    {
        //System.out.println( "Hello World!" );

        ChaseBank chase = new ChaseBank();
        double interestRate = chase.getRateOfInterest();
        double discount = chase.discount(7.2);
        System.out.println("Interest Rate = " + interestRate + "   Discount = " + discount);
    }
}