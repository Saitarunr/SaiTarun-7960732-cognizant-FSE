DECLARE
    v_customer_age NUMBER;
BEGIN
    FOR customer_rec IN (
        SELECT CustomerID,
               FLOOR(MONTHS_BETWEEN(SYSDATE, DOB)/12) customer_age
        FROM Customers
    )
    LOOP
        v_customer_age := customer_rec.customer_age;

        IF v_customer_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Interest concession granted to Customer '
                || customer_rec.CustomerID
            );

        END IF;
    END LOOP;

    COMMIT;
END;
/
