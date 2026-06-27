package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class AssertionsTest {

    @Test
    public void verifyAllAssertions() {

        assertEquals(15, 10 + 5);

        assertTrue(20 > 10);

        assertFalse(5 > 10);

        assertNotNull(new Calculator());

        assertNull(null);

    }

}
