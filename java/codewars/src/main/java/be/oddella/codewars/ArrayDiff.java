package be.oddella.codewars;

import java.util.ArrayList;
import java.util.List;

public class ArrayDiff {
    public static int[] arrayDiff(int[] a, int[] b) {
        List<Integer> result = new ArrayList<>();
        for (int num : a) {
            boolean found = false;
            for (int numb : b) {
                if(num == numb) {
                    found = true;
                    break;
                }
            }
            if(!found) result.add(num);
        }
        int [] resultArr = new int[result.size()];
        for(int i = 0; i < result.size(); i++) {
            resultArr[i] = result.get(i);
        }
        return resultArr;
    }
}
