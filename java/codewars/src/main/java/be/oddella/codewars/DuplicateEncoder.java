package be.oddella.codewars;

import java.util.HashMap;

public class DuplicateEncoder {

    private static HashMap<Character, Integer> dictionary = new HashMap<>();

    static String encode(String word) {
        String lowerWord = word.toLowerCase();
        for(char letter: lowerWord.toCharArray()) {
            if(dictionary.get(letter) != null) {
                dictionary.put(letter, dictionary.get(letter)+1);
            } else {
                dictionary.put(letter, 1);
            }
        }
        StringBuilder sb = new StringBuilder();
        for (char c : lowerWord.toCharArray()) {
            if(dictionary.get(c) == 1) {
                sb.append("(");
            } else {
                sb.append(")");
            }
        }
        return sb.toString();
    }
}
