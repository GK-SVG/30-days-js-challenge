function findEvenOdd(number){
    if (number%2==0) {
        console.log(`${number} is even`)
    } else {
        console.log(`${number} is odd`)
    }
}

findEvenOdd(11)

function square(number) {
    console.log(`square of ${number}--`,number*number)
}

square(12)

function findMax(number1, number2) {
    if (number1>number2) {
        console.log(`number1 is bigger ${number1}`)
    } else {
        console.log(`number2 is bigger ${number2}`)
    }
}

findMax(23, 45)


function concatString(str1, str2) {
    console.log(str1 + str2)
}

concatString('abc', 'def')

let sum = (number1, number2) => {
    return number1 + number2
}

console.log(sum(3,5))

let hasSpecialChar = (string) => {
    const regex = /[^a-zA-Z0-9 \.\,\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\;\:\'\"\<\>\?\|\\\/]/;
    return regex.test(string);
}

console.log(hasSpecialChar("gk"))


function name() {
    console.log("My name id Khan")
}

function higherOrderFunction(name, number){
    for (let index = 0; index < number; index++) {
        name()
    }
}

higherOrderFunction(name,5)

function h1(number){
    return number*number
}

function h2(number){
    return number*number
}

function h3(h1, h2, number) {
    let retVal = h1(number)
    console.log(h2(retVal))
}

h3(h1, h2, 5)