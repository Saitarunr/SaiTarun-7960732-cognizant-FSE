import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.verify;

public class CustomerServiceTest {

    @Test
    public void verifyMethodCall() {

        ExternalService fakeService = Mockito.mock(ExternalService.class);

        CustomerService customer = new CustomerService(fakeService);

        customer.displayCustomer();

        verify(fakeService).getCustomerDetails();

        System.out.println("Method invocation verified successfully.");
    }
}
