package com.revature.servlets;

public class Factory {

}

interface Dessert {
    String bake();
}

class Cake implements Dessert {
    @Override
    public String bake() {
        return "bake red velvet";
    }
}

class Cookie implements Dessert {
    @Override
    public String bake() {
        return "everyone loves chocolate chip";
    }
}

class Brownie implements Dessert {
    @Override
    public String bake() {
        return "fudgy brownies are the best";
    }
}