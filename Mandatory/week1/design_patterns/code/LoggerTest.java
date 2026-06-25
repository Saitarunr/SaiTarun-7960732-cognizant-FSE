public class LoggerTest {

    public static void main(String[] args) {

        AppLogger firstReference = AppLogger.getLogger();
        firstReference.writeLog("Application Started");

        AppLogger secondReference = AppLogger.getLogger();
        secondReference.writeLog("Processing Request");

        if (firstReference == secondReference) {
            System.out.println("Only one logger instance exists.");
        } else {
            System.out.println("Multiple instances created.");
        }
    }
}
