public class AppLogger {

    private static AppLogger instance;

    private AppLogger() {
    }

    public static AppLogger getInstance() {

        if (instance == null) {
            instance = new AppLogger();
        }

        return instance;
    }
}
