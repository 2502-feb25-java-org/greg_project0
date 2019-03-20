package com.revature;
//import java.lang.reflect.*;

class TestCheck {
    private String msg;

    public TestCheck() {
        msg = "Secret";
    }

    public TestCheck(String msg) {
        this.msg = msg;
    }

    public void M1() {
        System.out.println("Msg from M1: " + msg);
    }
    public void M2(String msg) {
        System.out.println("Msg from M2: " + msg);
    }
    // private void M3() {
    //     System.out.println("Inside Private Method");
    // }
}

class ReflectionDemo {
    public static void main(String[] args) {
        /*
        TestCheck obj = new TestCheck();

        Class clsObj = obj.getClass();
        System.out.println(clsObj.getName());

        
        Constructor[] cnstrs = clsObj.getConstructors();
        for (Constructor cnstr : cnstrs) {
            System.out.println(cnstr);
        }

        Method[] methods = clsObj.getMethods();
        for (Method method : methods) {
            System.out.println(method.getName());
        }
        
        /*
        Method[] methods1 = clsObj.getDeclaredMethods();
        for (Method method : methods1) {
            System.out.println(method);
        }

        // Method invokeM3 = clsObj.getDeclaredMethod("M3");
        // invokeM3.setAccessible(true);
        // System.out.println(invokeM3.getName());
        // //invokeM3.invoke(obj, args);

        
        //Field field = clsObj.getField("msg");
        //field.setAccessible(true);
        //System.out.println(field);
        */
    }
}