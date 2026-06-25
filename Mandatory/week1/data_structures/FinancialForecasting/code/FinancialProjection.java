public class FinancialProjection {

    private double presentValue;
    private double annualGrowth;
    private int duration;

    public FinancialProjection(double presentValue,
                               double annualGrowth,
                               int duration) {

        this.presentValue = presentValue;
        this.annualGrowth = annualGrowth;
        this.duration = duration;
    }

    public double getPresentValue() {
        return presentValue;
    }

    public double getAnnualGrowth() {
        return annualGrowth;
    }

    public int getDuration() {
        return duration;
    }
}
