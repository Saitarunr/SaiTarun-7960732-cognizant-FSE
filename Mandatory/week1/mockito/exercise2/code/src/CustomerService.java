public class CustomerService {

    private ExternalService service;

    public CustomerService(ExternalService service) {
        this.service = service;
    }

    public String displayCustomer() {
        return service.getCustomerDetails();
    }
}
