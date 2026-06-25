public class WordCreator extends DocumentCreator {

    @Override
    public Document generateDocument() {
        return new WordFile();
    }
}
