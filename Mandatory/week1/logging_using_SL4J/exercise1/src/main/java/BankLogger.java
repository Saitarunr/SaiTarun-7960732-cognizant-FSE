import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BankLogger {

    private static final Logger log =
            LoggerFactory.getLogger(BankLogger.class);

    public static void main(String[] args) {

        log.warn("Customer attempted multiple invalid login attempts.");

        log.error("Unable to complete the fund transfer due to a server issue.");

    }
}
