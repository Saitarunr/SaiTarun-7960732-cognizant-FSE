BEGIN
    FOR due_loan IN (
        SELECT LoanID,
               CustomerID,
               DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30
          AND DueDate >= SYSDATE
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Notification: Customer '
            || due_loan.CustomerID
            || ', Loan '
            || due_loan.LoanID
            || ' must be paid before '
            || TO_CHAR(due_loan.DueDate,'DD-MON-YYYY')
        );

    END LOOP;
END;
/
