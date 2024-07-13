// Declaring variables using let, var, const
var var_name = "var-test"
let let_name = "let-test"
const const_name = "const-test"

console.log('var variable--', var_name)
console.log('let variable--', let_name)
console.log('const variable--',const_name)

var var_name = 10

console.log('var variable--', var_name)

//we can't re-Declare variable which is already declared via let 
//but if you do you will get below error
//SyntaxError: Identifier 'let_name' has already been declared
// let let_name = 20 
// console.log('let variable--', let_name)

// variable declared via const can't be re-Declare 
//but if you do you will get below error
//SyntaxError: Identifier 'let_name' has already been declared
// const const_name = 30
// console.log('const variable--',const_name)


var_name = true
let_name = [1,2,3,4]
console.log('var variable--', var_name)
console.log('let variable--', let_name)
//we can't re-assign/change value of cont variable
//but if you do you will get below error
//TypeError: Assignment to constant variable.
// const_name = false
//console.log('const variable--',const_name)

let string = "test-string"
console.log(typeof(string))

let intiger = 10
console.log(typeof(intiger))

let float = 10.5
console.log(typeof(float)) // treated as number

let bool = false
console.log(typeof(bool))

let array = [1,2,3,4]
console.log(typeof(array)) // treated as object

let dict = {'key1':1, 'key2':2}
console.log(typeof(dict))
