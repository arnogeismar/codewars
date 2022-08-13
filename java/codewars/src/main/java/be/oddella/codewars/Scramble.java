package be.oddella.codewars;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Scramble {
    public static boolean scramble(String str1, String str2) {
        StringBuilder sb = new StringBuilder(str2).char;
        for (char c : str2.toCharArray()) {

        }
        Pattern pattern = Pattern.compile(List.of(str1.toCharArray()));
        Matcher matcher = pattern.matcher(str2);
        return matcher.find();
        // your code
    }
}
