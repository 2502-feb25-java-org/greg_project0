package com.revature;
import java.util.*;

public class App 
{
    public static void main( String[] args )
    {
        //CreateArrayList();
        CreateStack();
    }

    static void CreateArrayList() {
        ArrayList<String> ar = new ArrayList<>();
        ar.add("Greg");
        ar.add("Hadjiyane");
        //ar.add(27);
        //ar.add(1, "test");
        for(String item : ar) {
            System.out.println(item);
        }
        System.out.println("Size: " + ar.size());
        System.out.println("Second Element: " + ar.get(1));
    }

    static void CreateStack() {
        Stack<String> stack = new Stack<>();
        stack.push("Greg");
        stack.push("Hadjiyane");
        System.out.println(stack.peek());
    }
}
