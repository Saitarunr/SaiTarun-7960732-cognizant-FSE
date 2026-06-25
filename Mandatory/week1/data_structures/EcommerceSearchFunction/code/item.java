public class Item {

    private int itemCode;
    private String itemName;
    private String itemCategory;

    public Item(int itemCode, String itemName, String itemCategory) {
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.itemCategory = itemCategory;
    }

    public int fetchCode() {
        return itemCode;
    }

    public void printInfo() {
        System.out.println("Code      : " + itemCode);
        System.out.println("Name      : " + itemName);
        System.out.println("Category  : " + itemCategory);
    }
}
