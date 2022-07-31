package be.oddella.codewars;

import java.util.ArrayList;

public class Metro {

    public static int countPassengers(ArrayList<int[]> stops) {
        int count = 0;
        for (int[] stop : stops) {
            count = count + stop[0] - stop[1];
        }
        return count;
    }
}
