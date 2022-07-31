package be.oddella.codewars;

public class AreSame {
    public static boolean comp(int[] a, int[] b) {
        if(a == null || b == null) return true;
        if(a.length == 0 && b.length ==0) return true;
        for (int rootNum : b) {
            double root = Math.sqrt(rootNum);
            boolean found = false;
            for (int base : a) {
                if (root == (double) base) {
                    found = true;
                    break;
                }
            }
            if(!found) {
                return false;
            }
        }
        return true;
    }
}