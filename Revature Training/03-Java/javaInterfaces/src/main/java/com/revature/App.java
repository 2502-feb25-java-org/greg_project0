package com.revature;

public class App 
{
    public static void main( String[] args )
    {
        /*
        ChaseBank chase = new ChaseBank();
        double interestRate = chase.getRateOfInterest();
        double discount = chase.discount(7.2);
        System.out.println("Interest Rate = " + interestRate + "   Discount = " + discount);
        */

        /*
        //Wrapper Classes (Converts primitive to reference during AutoBoxing)
        /*
        int -> Integer
        boolean -> Boolean
        char -> Character
        */
        /*
        int a = 20;
        Integer i = Integer.valueOf(a); //Conversion of int to Integer (transfers from Stack to Heap)
        Integer j = a; //Autoboxing
        System.out.println(i);
        System.out.println(j);

        Integer x = new Integer(10);
        int y = x; //Unboxing (Implicit conversion)
        System.out.println(y);
        */

        /*
        //COLLECTIONS: Arrays, Collection Framework(Collection API)
        //Arrays: homogeneous items and placed in contiguous memory location
        int[] arr1; //Declarations
        //int []arr2;
        //int arr3[];
        arr1 = new int[10]; //Initialization
        //int[] arr4 = {10, 20, 12, 256, 78}; //Declaration and Initialization

        arr1[0] = 1; //Value assignment
        arr1[2] = 2;
        for(int i = 0; i < arr1.length; i++) { //Basic For-Loop
            System.out.println(arr1[i]);
        }
        for(int item : arr1) { //Advanced For-Each-Loop
            System.out.println(item);
        }

        //2D Arrays
        int row = 2, col = 3;
        int[][] tdArr1 = new int[row][col];
        int[][] tdArr2 = {{1, 2, 3}, {4, 5, 6}};
        tdArr1[0][0] = 1;
        */

        /*
        //Jagged Array
        String[][] ja = new String[3][];
        //ja[0] = new String[3];
        //ja[1] = new String[2];
        //ja[2] = new String[5];
        ja[0] = new String[]{"Hello", "All", "World"};
        ja[1] = new String[]{"CUNY", "SPS"};
        ja[2] = new String[]{"We", "are", "Java", "programmers", "."};
        System.out.println(ja.length);
        for(int i = 0; i < ja.length; i++) {
            for(int j = 0; j < ja[i].length; j++) {
                System.out.println(ja[i][j]);
            }
            System.out.println();
        }
        */

        //In-class Assignment
        int a[][]={{1,3,4},{3,4,5}};    // 1 3 4
                                        // 3 4 5
        
        int b[][]={{1,3,4},{3,4,5}};    // 1 3 4
                                        // 3 4 5
        //Add 2 matrices above as a+b.
        int c[][] = new int[2][3];
        for(int i = 0; i < a.length; i++) {
            for(int j = 0; j < a[i].length; j++) {
                c[i][j] = (a[i][j] + b[i][j]);
                System.out.println(a[i][j] + " + " + b[i][j] + " = " + c[i][j]);
            }
        }
        System.out.println("\n");
        
        int x[][]={{1,1,1},{2,2,2},{3,3,3}};
        int y[][]={{1,1,1},{2,2,2},{3,3,3}};
        //Multiply 2 matrices as x*y
        int z[][] = new int[3][3];
        

        
    }
}