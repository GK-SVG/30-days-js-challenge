// Array Destructuring
// Array destructuring allows you to extract values from arrays and assign them to variables.

const array = [1, 2, 3, 4];

const [first, second, third] = array;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

const array2 = [1, 2];

const [first_, , third_ = 3] = array2;

console.log(first_);  // Output: 1
console.log(third_);  // Output: 3

// Object Destructuring
// Object destructuring allows you to extract values from objects and assign them to variables with matching property names.

const person = {
    name: "Alice",
    age: 30,
    profession: "Engineer"
  };
  
//   const { name, age, profession } = person;
  
//   console.log(name);       // Output: Alice
//   console.log(age);        // Output: 30
//   console.log(profession); // Output: Engineer

  const person2 = {
    name: "Alice",
    age: 30
  };
  
  const { name, age, profession = "Unknown" } = person2;
  
  console.log(name);       // Output: Alice
  console.log(age);        // Output: 30
  console.log(profession); // Output: Unknown
  

// Spread Operator
// The spread operator expands elements of an iterable (like an array or object) into individual elements.

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2); // Output: [1, 2, 3]

const arr1 = [1, 2];
const arr2 = [2, 3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // Output: [1, 2, 3, 4]
