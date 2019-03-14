package com.revature;

public class JavaTests 
{
    public static void main( String[] args )
    {
        int x = 6;
        int y = 2;
        int z = x + y; //Addition
        System.out.println(x + " + " + y + " = " + z);
        z = x - y; //Subtraction
        System.out.println(x + " - " + y + " = " + z);
        z = x * y; //Multiplication
        System.out.println(x + " * " + y + " = " + z);
        z = x / y; //Division
        System.out.println(x + " / " + y + " = " + z);

        //Conditionals
        if((x > y) && (x > z)) {
            System.out.println("x is the biggest");
        }
        else if((y > x) && (y > z)) {
            System.out.println("y is the biggest");
        }
        else {
            System.out.println("z is the biggest");
        }

        //Booleans and Logic
        boolean a = true;
        boolean b = false;
        System.out.println(!a); //NOT a
        System.out.println(a | b); //a OR b
        System.out.println((!a & b) | (a & !b)); //(NOT a AND b) OR (a AND NOT b)
    }
}
