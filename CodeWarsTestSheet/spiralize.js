function spiralize(n) {
  let result = n.map(function (array) {
    let result = []
    array.map((a) => {
      return a === 1 ? 0 : "."
    })
    return result
  })
}
// const chai = require('chai');
// chai.config.truncateThreshold = 0;
// const deepEqual = chai.assert.deepEqual;

// function doTest (n, expected) {
// 	const actual = spiralize(n);
// 	deepEqual(actual, expected, `for n = ${n}:\n`);
// }

// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest(5, [
// 			[1,1,1,1,1],
// 			[0,0,0,0,1],
// 			[1,1,1,0,1],
// 			[1,0,0,0,1],
// 			[1,1,1,1,1]]
// 		);
// 		doTest(8, [
// 			[1,1,1,1,1,1,1,1],
// 			[0,0,0,0,0,0,0,1],
// 			[1,1,1,1,1,1,0,1],
// 			[1,0,0,0,0,1,0,1],
// 			[1,0,1,0,0,1,0,1],
// 			[1,0,1,1,1,1,0,1],
// 			[1,0,0,0,0,0,0,1],
// 			[1,1,1,1,1,1,1,1]
// 		]);
// 	});
// });

console.logt5(spiralize(5))
