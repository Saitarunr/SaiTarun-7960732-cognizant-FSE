public class Main {

    public static void main(String[] args) {

        DocumentCreator wordFactory =
                new WordCreator();

        Document wordDoc =
                wordFactory.generateDocument();

        wordDoc.open();

        DocumentCreator pdfFactory =
                new PdfCreator();

        Document pdfDoc =
                pdfFactory.generateDocument();

        pdfDoc.open();

        DocumentCreator excelFactory =
                new ExcelCreator();

        Document excelDoc =
                excelFactory.generateDocument();

        excelDoc.open();
    }
}
