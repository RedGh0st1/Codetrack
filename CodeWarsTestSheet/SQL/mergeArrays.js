// Write a function that merges two sorted arrays into a single one.
// The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  const mergedArr = a.concat(b);
  const uniqueArr = new Set(mergedArr);
  return [...uniqueArr].sort((a, b) => a - b);
}
