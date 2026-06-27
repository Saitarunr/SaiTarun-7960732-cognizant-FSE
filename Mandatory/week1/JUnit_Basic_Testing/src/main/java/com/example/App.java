package com.example;

public class App {

    public static void main(String[] args) {

        Calculator calculator = new Calculator();

        int answer = calculator.performAddition(15, 25);

        System.out.println("Addition Result : " + answer);

    }

}
