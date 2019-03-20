package com.revature.servlets;

public class Factory {

    public static Dessert getDessert(String type) {
        switch (type) {
            case "cake": return new Cake();
            case "brownie": return new Brownie();
            case "cookie": return new Cookie();
            default: throw new DessertNotFoundException();
        }
    }
}

class DessertNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 8641240493803243770L;

    public DessertNotFoundException() {
        super("Did not enter a valid dessert option!");
    }
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