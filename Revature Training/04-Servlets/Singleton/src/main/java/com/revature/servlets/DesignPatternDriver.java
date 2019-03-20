package com.revature.servlets;

public class DesignPatternDriver
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        Singleton.test();
    }

    static void eagerVsLazy() {
        Singleton.test();
    }

    static void testSingleton() {

    }
}