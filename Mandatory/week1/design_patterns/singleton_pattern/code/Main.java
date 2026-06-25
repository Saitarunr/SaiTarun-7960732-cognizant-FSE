public class Main {

    public static void main(String[] args) {

        LogService service1 = new LogService();
        service1.record("Application Started");

        LogService service2 = new LogService();
        service2.record("User Login Successful");

        if (service1.getLogger() == service2.getLogger()) {
            System.out.println("Singleton Pattern Verified");
        } else {
            System.out.println("Multiple Logger Objects Created");
        }
    }
}
