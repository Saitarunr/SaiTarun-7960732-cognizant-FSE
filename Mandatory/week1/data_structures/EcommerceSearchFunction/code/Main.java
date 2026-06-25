import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Item[] inventory = {

                new Item(501, "Laptop", "Electronics"),
                new Item(205, "Sports Shoes", "Fashion"),
                new Item(108, "Smart Watch", "Accessories"),
                new Item(315, "Headphones", "Electronics"),
                new Item(420, "Travel Bag", "Lifestyle")
        };

        int searchKey = 108;

        System.out.println("=== Sequential Search ===");

        Item firstResult =
                ProductFinder.sequentialLookup(inventory, searchKey);

        if (firstResult != null) {
            firstResult.printInfo();
        } else {
            System.out.println("Item not available.");
        }

        Arrays.sort(
                inventory,
                Comparator.comparingInt(Item::fetchCode)
        );

        System.out.println("\n=== Binary Search ===");

        Item secondResult =
                ProductFinder.divideAndSearch(inventory, searchKey);

        if (secondResult != null) {
            secondResult.printInfo();
        } else {
            System.out.println("Item not available.");
        }
    }
}
