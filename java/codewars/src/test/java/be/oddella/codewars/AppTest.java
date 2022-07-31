package be.oddella.codewars;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import java.util.ArrayList;

public class AppTest 
{
    @Test
    public void reverseWords()
    {
        assertTrue( new ReverseWords().reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god").equals("The quick brown fox jumps over the lazy dog.") );
    }

    @Test
    public void duplicateEncoder() {
        assertEquals(")()())()(()()(",
                DuplicateEncoder.encode("Prespecialized"));
        assertEquals("))))())))",DuplicateEncoder.encode("   ()(   "));
    }

    @Test
    public void test1() {
        ArrayList<int[]> list = new ArrayList<int[]>();
        list.add(new int[] {10,0});
        list.add(new int[] {3,5});
        list.add(new int[] {2,5});
        assertEquals(5, Metro.countPassengers(list));
    }
}
