# You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
# Return the number of strings in words that are a prefix of s.
# A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.



class Solution:
    def countPrefixes(self, words: List[str], s: str) -> int:
        # create a variable to store count 
        count = 0
        
        # For each string in words, 
        for word in words:

        # check if it is a prefix of s.
          if s.startswith(word):

        # If true, increment the answer by 1.
             count+=1

        return count     
    

# Example 1:
# Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
# Output: 3
# Explanation:
# The strings in words which are a prefix of s = "abc" are:
# "a", "ab", and "abc".
# Thus the number of strings in words which are a prefix of s is 3.

# Example 2:
# Input: words = ["a","a"], s = "aa"
# Output: 2
# Explanation:
# Both of the strings are a prefix of s. 
# Note that the same string can occur multiple times in words, and it should be counted each time.
