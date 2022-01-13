// Function scope
// Anything within the curly brackets can
// only be accessed within the curly brackets
// (unless you return it)
function sum(a, b) {
  const result = a + b;
  // Solution 1:
  // return result;
}

console.log(result); // ReferenceError: result is not defined

// Solution 1 part 2:
const num = sum(1, 2);
console.log(num);

// Block Scope
if (true) {
  const abc = 123;
}

console.log(abc); // ReferenceError: abc is not defined

// This also applies to everything else with
// blocks, such as loops
for (let count = 1; count < 10; count++) {}
console.log(count); // ReferenceError: count is not defined
