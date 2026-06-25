public class AppLogger {

    private static AppLogger loggerObject;

    private AppLogger() {
        System.out.println("Logger initialized.");
    }

    public static AppLogger getLogger() {

        if (loggerObject == null) {
            loggerObject = new AppLogger();
        }

        return loggerObject;
    }

    public void writeLog(String message) {
        System.out.println("[LOG] " + message);
    }
}
