let a = 5
let b = 8

console.log(`addition ${a} + ${b}:`, a+b)
console.log(`subtraction ${a} - ${b}:`, a-b)
console.log(`multiplication ${a} * ${b}:`,a*b)
console.log(`division ${a} / ${b}:`, a/b)

let temp_a = a

a += b

console.log(`addition ${temp_a} += ${b}:`, a)

let temp_b = b

b -= a

console.log(`subtraction ${temp_b} -= ${a}:`, b)


console.log(`${a} > ${b}`, a>b)
console.log(`${a} < ${b}`, a<b)
console.log(`${a} >= ${b}`, a>=b)
console.log(`${a} <= ${b}`, a<=b)

let c = a>b ? "a is greater than b" : "b is greater than a"

console.log(c)