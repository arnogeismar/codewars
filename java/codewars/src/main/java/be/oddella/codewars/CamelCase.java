package be.oddella.codewars;

import java.util.Arrays;
import java.util.stream.Collectors;

class CamelCase {

    static String toCamelCase(String s) {
        String[] words = s.split("-|_");
        return words[0] + Arrays.stream(words).skip(1).map(word -> word.substring(0,1).toUpperCase() + word.substring(1)).collect(Collectors.joining());
    }
}