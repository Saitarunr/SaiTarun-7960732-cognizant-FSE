public class ProductFinder {

    public static Item sequentialLookup(Item[] inventory, int targetCode) {

        for (Item currentItem : inventory) {

            if (currentItem.fetchCode() == targetCode) {
                return currentItem;
            }
        }

        return null;
    }

    public static Item divideAndSearch(Item[] inventory, int targetCode) {

        int startIndex = 0;
        int endIndex = inventory.length - 1;

        while (startIndex <= endIndex) {

            int middleIndex =
                    startIndex + (endIndex - startIndex) / 2;

            if (inventory[middleIndex].fetchCode() == targetCode) {
                return inventory[middleIndex];
            }

            if (inventory[middleIndex].fetchCode() < targetCode) {
                startIndex = middleIndex + 1;
            } else {
                endIndex = middleIndex - 1;
            }
        }

        return null;
    }
}
