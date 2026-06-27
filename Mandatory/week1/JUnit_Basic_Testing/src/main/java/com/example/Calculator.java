package com.exercise1;

public class Calculator {

    private MathOperations mathOperations;

    public Calculator() {

        mathOperations = new MathOperations();

    }

    public int performAddition(int numberOne, int numberTwo) {

        return mathOperations.add(numberOne, numberTwo);

    }

}
