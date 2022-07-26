import unittest

# Complete the solution so that it splits the string into pairs of two characters.
# If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

def solution(s):
    if len(s) == 0:
        return []
    res = ""
    temp = ""
    for letter in s:
        if len(temp) < 2:
            temp = temp + letter
        else:
            res = res + " " + temp
            temp = letter
    if len(temp) == 1:
        res = res + " " + temp+"_"
    else:
        res = res + " " + temp

    return res.lstrip(" ").split(" ")

class TestSplitStrings(unittest.TestCase):

    def test_split_strings(self):
        self.assertEqual(solution("asdfadsf"), ['as', 'df', 'ad', 'sf'])

    def test_split_strings2(self):
        self.assertEqual(solution("asdfads"), ['as', 'df', 'ad', 's_'])

    def test_split_strings3(self):
        self.assertEqual(solution(""), [])

    def test_split_strings4(self):
        self.assertEqual(solution("x"), ['x_'])
