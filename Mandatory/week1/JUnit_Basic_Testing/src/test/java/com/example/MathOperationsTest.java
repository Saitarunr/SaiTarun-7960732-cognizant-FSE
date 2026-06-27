package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MathOperationsTest {

    private MathOperations mathOperations;

    @BeforeEach
    public void initializeObject() {

        mathOperations = new MathOperations();

    }

    @Test
    public void testSquareOperation() {

        assertEquals(36, mathOperations.square(6));

    }

    @Test
    public void testCubeOperation() {

        assertEquals(216, mathOperations.cube(6));

    }

    @Test
    public void testEvenNumber() {

        assertTrue(mathOperations.isEven(12));

    }

    @Test
    public void testOddNumber() {

        assertFalse(mathOperations.isEven(15));

    }

    @Test
    public void testSquareOfZero() {

        assertEquals(0, mathOperations.square(0));

    }

    @Test
    public void testNegativeCube() {

        assertEquals(-125, mathOperations.cube(-5));

    }

}
