//let vs const
let number: number = 5;
number = 10; 
//console.log ("number", number);
 const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Peter!"
let test: string = `Ivan`;

let welcomeMessageLength: number = welcomeMessage.length;
//console.log ("welcomeMessageLength",welcomeMessageLength);

// string interpolation 
let welcomeMessageDetails: string= `My welcome message length is ${welcomeMessageLength}`
let userWelcomeMessage: string = `Welcome, ${test}`
//console.log(userWelcomeMessage);

//Number
let firstNumber: number = 5; 
let secondNumber: number = 10; 

// Number math operations
let substract: number = firstNumber - secondNumber;
let add: number = firstNumber + secondNumber;
let multiply: number = firstNumber * secondNumber;
let divide: number = firstNumber / secondNumber; //ако ни интерсува остатъка вместо / изполваме %
//console.log("result", result); 

//Boolean (true/false)
 
let isGreater: boolean = firstNumber > secondNumber; 
//console.log("isGreater", isGreater);
let isLower: boolean = firstNumber < secondNumber; 
let isEqual: boolean = firstNumber === secondNumber; // за различно се използва !==
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
//console.log("areNumbersEqualTo", areNumbersEqualTo);
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber
//console.log("isAnyNumberEqualTo", isAnyNumberEqualTo);

// Any
let stringValue: any = "Hello";
stringValue = 10; 
stringValue = 10 === 10; 
stringValue = [10, 20, 30];
//console.log("stringValue", stringValue);
//console.log ("Hello, Typescript!");

