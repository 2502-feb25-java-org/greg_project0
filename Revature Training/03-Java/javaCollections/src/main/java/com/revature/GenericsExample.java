package com.revature;

class TestGenerics<T, U> {
    T t;
    U u;
    public TestGenerics(T t, U u) {
        this.t = t;
        this.u = u;
    }

    public void readValues() {
        System.out.println(t + " " + u);
    }

    static<T> String compare(T t1, T t2) {
        boolean res =  t1.equals(t2);
        if(res) {
            return "The objects are equal.";
        }
        else {
            return "The objects are NOT equal.";
        }
    }
}

class MainClass {
    public static void main(String[] args) {
        TestGenerics<Integer, String> myGenericObj = new TestGenerics(123, "Generic");
        myGenericObj.readValues();

        System.out.println(TestGenerics.compare(1, 2));
    }
}