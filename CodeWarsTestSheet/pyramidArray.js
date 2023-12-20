// Write a function that when given a number >= 0, returns an Array of ascending length subarrays

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Note: the subarrays should be filled with 1s
function pyramid(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Array(i + 1).fill(1))
  }
  return arr

  // return Array(n).fill().map((_, i) => Array(i + 1).fill(1))
}
