for (let index = 1; index < 11; index++) {
   console.log(index)
}

for (let index = 1; index < 11; index++) {
    console.log(index*5)
 }

 let number = 1
 let sum = 0
 while (number<=10) {
    sum += number;
    number++;
 }

 console.log('sum--', sum)

 while (number>=1) {
    console.log(number)
    number--;
 }
number = 1
 do {
    console.log(number)
    number++;
 } while (number<=5);

 number = 1
 let factorial = 1
 do {
    factorial *= number
    number++;
 } while (number<=5);

 console.log('factorial--', factorial)

 for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}