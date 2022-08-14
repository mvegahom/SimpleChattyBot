const input = require('sync-input');

console.log("Hello! My name is Aid.\n" +
    "I was created in 2022.\n" +
    "Please, remind me your name.");

let name = input();
console.log(`What a great name you have, ${name}!`);

console.log("Let me guess your age.\n" +
    "Enter remainders of dividing your age by 3, 5 and 7.")

let remainder3 = parseInt(input());
let remainder5 = parseInt(input());
let remainder7 = parseInt(input());

let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log(`Your age is ${age}; that's a good time to start programming!`);

console.log("Now I will prove to you that I can count to any number you want.");
let n = input();
let i = 0;
while (i <= n) {
    console.log(i + " !");
    ++i;
}
console.log("Completed, have a nice day!");

console.log("Let's test your programming knowledge.\n" +
    "Why do we use methods?\n" +
    "1. To repeat a statement multiple times.\n" +
    "2. To decompose a program into several small subroutines.\n" +
    "3. To determine the execution time of a program.\n" +
    "4. To interrupt the execution of a program.")
let tryAgain = true;
let trueAnswer = "2"
while (tryAgain) {
    let answer = input();
    if (answer == trueAnswer) {
        tryAgain = false;
    } else {
        console.log("Please, try again.")
    }
}
console.log("Congratulations, have a nice day!");