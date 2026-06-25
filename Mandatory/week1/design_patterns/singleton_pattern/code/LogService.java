public class LogService {

    private AppLogger logger;

    public LogService() {
        logger = AppLogger.getInstance();
    }

    public void record(String message) {
        System.out.println("[LOG] " + message);
    }

    public AppLogger getLogger() {
        return logger;
    }
}
