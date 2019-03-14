package com.revature;

interface CreditCard {
    double discount(double creditScore); //Declaration
}

interface Bank extends CreditCard {
    double getRateOfInterest();
}

class ChaseBank implements Bank {
    @Override
    public double discount(double creditScore) {
        if(creditScore > 6.8) return 15.0;
        
        else return 7.5;
    }

    @Override
    public double getRateOfInterest() {
        return 3.2;
    }
}