package be.oddella.codewars;

public class ReverseWords {
  
  public static String reverseWords(final String original)
  {
    if(original.trim().equals("")) return original;
    String[] words = original.split(" ");
    StringBuilder sb = new StringBuilder("");
    for(int i=0; i<words.length ; i++) {
      char[] word = words[i].toCharArray();
      for(int b = word.length-1; b>=0; b--) {
        sb.append(word[b]);
      }
      if(i<words.length-1) {
        sb.append(" ");
      }
    }
    return sb.toString();
  }

}
