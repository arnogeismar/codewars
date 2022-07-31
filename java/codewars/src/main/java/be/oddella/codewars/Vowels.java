package be.oddella.codewars;

import java.util.HashMap;
import java.util.Map;

public class Vowels {

    public static int getCount(String str) {
        Map<Character, Integer> vowelMap = new HashMap<>(Map.of('a', 0, 'e', 0, 'i', 0, 'o', 0, 'u', 0));
        for (char c : str.toCharArray()) {
            if(vowelMap.get(c) != null) {
                vowelMap.put(c, vowelMap.get(c)+1);
            }
        }
        return vowelMap.values().stream().reduce(Integer::sum).orElse(0);
    }
}
