CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest successfully credited.'
    );

END;
/
