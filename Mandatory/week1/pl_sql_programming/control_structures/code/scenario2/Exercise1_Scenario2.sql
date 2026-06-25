BEGIN
    FOR customer_data IN (
        SELECT CustomerID,
               Balance
        FROM Customers
    )
    LOOP

        IF customer_data.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_data.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'VIP status activated for Customer '
                || customer_data.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;
END;
/
