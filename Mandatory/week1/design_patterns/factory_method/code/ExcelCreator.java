public class ExcelCreator extends DocumentCreator {

    @Override
    public Document generateDocument() {
        return new ExcelFile();
    }
}
