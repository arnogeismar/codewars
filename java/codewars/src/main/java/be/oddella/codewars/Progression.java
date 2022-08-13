package be.oddella.codewars;

public class Progression {
    public static int findMissing(int[] numbers) {
        int smallestStep = Math.min(numbers[1] - numbers[0], numbers[2] - numbers[1]) < 0 ? Math.max(numbers[1] - numbers[0], numbers[2] - numbers[1]) : Math.min(numbers[1] - numbers[0], numbers[2] - numbers[1]);
        if (smallestStep == 0) {
            return numbers[0];
        }
        for (int i = 0; i < numbers.length; i++) {
            if (i >= 1) {
                int step = numbers[i] - numbers[i - 1];
                if (step != smallestStep) {
                    if (step < 0) {
                        return (numbers[i - 1] - numbers[i]) / 2 + numbers[i];
                    }
                    return (numbers[i] - numbers[i - 1]) / 2 + numbers[i - 1];
                }
            }
        }
        return 0;
    }
//
//    [4, 2, 1]
//    [1, 2, 4]
}
