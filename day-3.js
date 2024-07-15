// Programme to check number is positive, negative or zero

// let number = 0;
// let number = 10;
let number = -20;

if (number != 0) {
 console.log(number > 0 ? "number is positive" : "number is negative" )   
}
else{
    console.log("number is zero")
}


//programme to is person is eligible to vote 

let age = 32

if (age >= 18) {
    console.log("You are eligible to vote")
} else {
    console.log("You are not eligible to vote")
    
}

//find largest from 3 number

let a = 82
let b = 29
let c = 98

if (a>b) {
    if (a>c) {
        console.log(`${a} is largest number`)
    } else {
        console.log(`${c} is largest number`)
    }
} else {
    if (b>c) {
        console.log(`${b} is largest number`)
    }
    else{
        console.log(`${c} is largest number`)
    }
}


//find today's day using switch case

let day = new Date().getDay()
switch (day) {
    case 0:
        console.log("Today is Monday")
        break;
    case 1:
        console.log("Today is Tuesday")
        break;
    case 2:
        console.log("Today is Wednesday")
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Find grade using switch case

let grade = 'B';

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("Well done");
        break;
    case 'D':
        console.log("You passed");
        break;
    case 'F':
        console.log("Better try again");
        break;
    default:
        console.log("Invalid grade");
}

// number is even or odd using ternary operator
let number1 = 5
console.log(number1%2==0 ? "Number is even" : "Number is odd")

//programme to check year is leap or not
let year = 1900
if (year%4==0) {
    if (year%100==0) {
        if (year%400==0) {
            console.log(`${year} is leap year`)
        }
        else{
            console.log(`${year} is not leap year`)

        }
    
    }else{
        console.log(`${year} is leap year`)

    }
}
else{
    console.log(`${year} is not leap year`)

}