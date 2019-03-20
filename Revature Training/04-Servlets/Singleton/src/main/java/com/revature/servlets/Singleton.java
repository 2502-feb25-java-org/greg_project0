package com.revature.servlets;

public class Singleton {
    public String name;

    {
        System.out.println("This is a non-static block of code");
    }

    private static Singleton instance; //Only declare, instantiate when asked

    private Singleton() {
        System.out.println("constructing lazy singleton");
    }

    public static Singleton getInstance() {
        if(instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    static void test() {
        System.out.println("Loading our lazy singleton");
    }
}