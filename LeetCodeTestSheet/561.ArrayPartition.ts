// 561. Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
// Return the maximized sum.

function arrayPairSum(nums: number[]): number {
  // sort the array in ascending order
  nums.sort((a, b) => a - b);

  // create a sum variable initialize to zero
  let sum: number = 0;

  // iterate thru the array,
  // to get a pair you have to i+=2 which will get you every two numbers in
  //example [1,2,3,4]= (1,2), (3,4)

  for (let i: number = 0; i < nums.length; i += 2) {
    // add the pair to sum
    sum += nums[i];
  }

  // return the sum
  return sum;
}

// Example 1:
console.log(arrayPairSum([1, 4, 3, 2]));
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
