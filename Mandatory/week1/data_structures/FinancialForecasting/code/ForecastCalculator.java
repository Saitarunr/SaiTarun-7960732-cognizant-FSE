public class ForecastCalculator {

    public double estimateFutureValue(double amount,
                                      double growthRate,
                                      int years) {

        if (years == 0) {
            return amount;
        }

        return estimateFutureValue(
                amount * (1 + growthRate),
                growthRate,
                years - 1
        );
    }
}
