package be.oddella.codewars;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertFalse;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertTrue;

import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.util.ArrayList;

@RunWith(JUnit4.class)
public class AppTest {

    @Test
    public void test() {
        System.out.println("Fixed Tests scramble");
        TestCase.assertTrue(Scramble.scramble("rkqodlw", "world"));
        TestCase.assertTrue(Scramble.scramble("cedewaraaossoqqyt", "codewars"));
        assertFalse(Scramble.scramble("katas", "steak"));
        assertFalse(Scramble.scramble("scriptjavx", "javascript"));
        TestCase.assertTrue(Scramble.scramble("scriptingjava", "javascript"));
        TestCase.assertTrue(Scramble.scramble("scriptsjava", "javascripts"));
        assertFalse(Scramble.scramble("javscripts", "javascript"));
        TestCase.assertTrue(Scramble.scramble("aabbcamaomsccdd", "commas"));
        TestCase.assertTrue(Scramble.scramble("commas", "commas"));
        TestCase.assertTrue(Scramble.scramble("sammoc", "commas"));
    }

    @Test
    public void testIncreasing_1() {
        assertEquals(3, Progression.findMissing(new int[]{ 1, 2, 4}));
    }

    @Test
    public void testIncreasing_2() {
        assertEquals(2, Progression.findMissing(new int[]{ 1, 3, 4}));
    }

    @Test
    public void testDecreasing_1() {
        assertEquals(3, Progression.findMissing(new int[]{ 4, 2, 1}));
    }

    @Test
    public void testDecreasing_2() {
        assertEquals(2, Progression.findMissing(new int[]{ 4, 3, 1}));
    }

    @Test
    public void testConstant() {
        assertEquals(1, Progression.findMissing(new int[]{ 1, 1, 1}));
    }
    @Test
    public void sampleTests() {
        assertArrayEquals(new int[] {2}, ArrayDiff.arrayDiff(new int [] {1,2}, new int[] {1}));
        assertArrayEquals(new int[] {2,2}, ArrayDiff.arrayDiff(new int [] {1,2,2}, new int[] {1}));
        assertArrayEquals(new int[] {1}, ArrayDiff.arrayDiff(new int [] {1,2,2}, new int[] {2}));
        assertArrayEquals(new int[] {1,2,2}, ArrayDiff.arrayDiff(new int [] {1,2,2}, new int[] {}));
        assertArrayEquals(new int[] {}, ArrayDiff.arrayDiff(new int [] {}, new int[] {1,2}));
    }
    @Test
    public void testSomeUnderscoreLowerStart() {
        String input = "the_Stealth_Warrior";
        System.out.println("input: "+input);
        assertEquals("theStealthWarrior", CamelCase.toCamelCase(input));
    }
    @Test
    public void testSomeDashLowerStart() {
        String input = "the-Stealth-Warrior";
        System.out.println("input: "+input);
        assertEquals("theStealthWarrior", CamelCase.toCamelCase(input));
    }
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

    @Test
    public void staticTests() {
        check("samurai", "ai", true);
        check("sumo", "omo", false);
        check("ninja", "ja", true);
        check("sensei", "i", true);
        check("samurai", "ra", false);
        check("abc", "abcd", false);
        check("abc", "abc", true);
        check("abcabc", "bc", true);
        check("ails", "fails", false);
        check("fails", "ails", true);
        check("this", "fails", false);
        check("this", "", true);
        check(":-)", ":-(", false);
        check("!@#$%^&*() :-)", ":-)", true);
        check("abc\n", "abc", false);
    }

    private static void check(String str, String ending, boolean expected) {
        boolean result = Ending.solution(str, ending);
        assertEquals("Expected solution(\"" + str + "\", \"" + ending + "\") to return " + expected, expected, result);
    }

    @Test
    public void testCase1() {
        assertEquals("Nope!", 5, Vowels.getCount("abracadabra"));
    }

    private static void testing(int actual, int expected) {
        assertEquals(expected, actual);
    }
    @Test
    public void argeTest() {
        System.out.println("Fixed Tests: nbYear");
        testing(Arge.nbYear(1500, 5, 100, 5000),15);
        testing(Arge.nbYear(1500000, 2.5, 10000, 2000000), 10);
        testing(Arge.nbYear(1500000, 0.25, 1000, 2000000), 94);
    }
}
