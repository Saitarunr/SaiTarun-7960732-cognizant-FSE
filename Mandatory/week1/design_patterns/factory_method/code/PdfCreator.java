public class PdfCreator extends DocumentCreator {

    @Override
    public Document generateDocument() {
        return new PdfFile();
    }
}
