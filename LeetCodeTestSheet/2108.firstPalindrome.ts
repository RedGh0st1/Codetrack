// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

function firstPalindrome(words: string[]): string {
  const firstPal: string | undefined = words.find((word) => {
    if (isPalindrome(word)) return word;
  });

  return firstPal || "";
}

const isPalindrome = (str: string): boolean => {
  let palinStr: string = str.split("").reverse().join("");
  return str === palinStr;
};

// Example 1:
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
console.log(firstPalindrome(["notapalindrome", "racecar"]));
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
console.log(firstPalindrome(["def", "ghi"]));
// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.
