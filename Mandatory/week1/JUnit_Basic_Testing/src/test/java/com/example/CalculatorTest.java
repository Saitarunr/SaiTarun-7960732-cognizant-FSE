package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void createCalculatorObject() {

        calculator = new Calculator();

    }

    @Test
    public void testAddition() {

        assertEquals(25, calculator.add(20, 5));

    }

    @Test
    public void testSubtraction() {

        assertEquals(15, calculator.subtract(20, 5));

    }

    @Test
    public void testMultiplication() {

        assertEquals(100, calculator.multiply(20, 5));

    }

    @Test
    public void testDivision() {

        assertEquals(4, calculator.divide(20, 5));

    }

}
