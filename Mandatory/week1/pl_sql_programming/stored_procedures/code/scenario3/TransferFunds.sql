CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account      IN NUMBER,
    p_destination_account IN NUMBER,
    p_transfer_amount     IN NUMBER
)
AS
    v_available_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_available_balance
    FROM Accounts
    WHERE AccountID = p_source_account;

    IF v_available_balance >= p_transfer_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_transfer_amount
        WHERE AccountID = p_source_account;

        UPDATE Accounts
        SET Balance = Balance + p_transfer_amount
        WHERE AccountID = p_destination_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer completed successfully.'
        );

    ELSE

        DBMS_OUTPUT.PUT_LINE(
            'Insufficient balance.'
        );

    END IF;

END;
/
