package com.revature;

class methods {
    int x = 6;
    int y = 2;

    public methods() {

    }

    int addNums() {
        return x + y;
    }
    int subNums() {
        return x - y;
    }
    int mulNums() {
        return x * y;
    }
    int divNums() {
        return x / y;
    }
}

public class MethodTests 
{
    public static void main( String[] args )
    {
        methods m = new methods();
        int z = m.addNums(); //Addition
        System.out.println(z);

        z = m.subNums(); //Subtraction
        System.out.println(z);

        z = m.mulNums(); //Multiplication
        System.out.println(z);

        z = m.divNums(); //Division
        System.out.println(z);
    }
}