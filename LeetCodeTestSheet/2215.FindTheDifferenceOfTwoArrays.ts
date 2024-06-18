// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Hint 1. For each integer in nums1, check if it exists in nums2.
// Hint 2. Do the same for each integer in nums2.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (
  nums1: number[],
  nums2: number[]
): [number[], number[]] {
  const setNum1: number[] = [...new Set(nums1)];
  const setNum2: number[] = [...new Set(nums2)];

  const findDiffnum1: number[] = setNum1.filter((num) => !nums2.includes(num));
  const findDiffNum2: number[] = setNum2.filter((num) => !nums1.includes(num));

  return [findDiffnum1, findDiffNum2];
};

// Example 1:
console.log(findDifference([1, 2, 3], [2, 4, 6]));
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// Example 2:
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
