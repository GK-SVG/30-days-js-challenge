let arr = [1,2,3,4,5]

console.log(arr)
console.log('1st element',arr[0])
console.log('last element',arr[arr.length - 1])


arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

// The shift method removes the first element from an array and returns that removed element. This method changes the length of the array.
let result = arr.shift()
console.log(arr)
console.log('result--', result)


// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(8)
console.log(arr)


// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // Outputs: [2, 4, 6, 8, 10]

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
  });

console.log('evenNumbers-', evenNumbers)

// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
let sum = numbers.reduce(function(accumulator, num) {
    return accumulator + num;
  }, 0);
  console.log(sum);  // Outputs: 15


for (let index = 0; index < arr.length; index++){ 
    let element = arr[index];
    console.log(element+1)
}

arr.forEach(element => {
    console.log(element)
});

let twoD_array = [[1,2,3,4],[5,6,7,8]]
console.log(twoD_array[1][0])