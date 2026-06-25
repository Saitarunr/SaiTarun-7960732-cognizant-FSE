public class Main {

    public static void main(String[] args) {

        FinancialProjection forecast =
                new FinancialProjection(
                        10000,
                        0.08,
                        5
                );

        ForecastCalculator calculator =
                new ForecastCalculator();

        double predictedAmount =
                calculator.estimateFutureValue(
                        forecast.getPresentValue(),
                        forecast.getAnnualGrowth(),
                        forecast.getDuration()
                );

        System.out.println("Initial Amount : "
                + forecast.getPresentValue());

        System.out.println("Growth Rate    : "
                + (forecast.getAnnualGrowth() * 100) + "%");

        System.out.println("Forecast Years : "
                + forecast.getDuration());

        System.out.println("Predicted Value: "
                + predictedAmount);
    }
}
