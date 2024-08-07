// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

package main

func findTheDifference(s string, t string) byte {
 if len(s) == 0 && len(t) >= 1{
    return t[0]
 }   

 seenS := make(map[rune]int)
 seenT := make(map[rune]int)
  
 for _, letter := range s {
    seenS[letter]++
 }


 for _, letter := range t {
     seenT[letter]++
 }
// 
for key, value := range seenT {
     if value != seenS[key]{
        return byte(key)
     }
}

 return 0
}