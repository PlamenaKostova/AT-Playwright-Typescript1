//let vs const
let number: number = 5;
number = 10;
//console.log ("number", number);
const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Peter!";
let test: string = `Ivan`;

let welcomeMessageLength: number = welcomeMessage.length;
//console.log ("welcomeMessageLength",welcomeMessageLength);

// string interpolation
let welcomeMessageDetails: string = `My welcome message length is ${welcomeMessageLength}`;
let userWelcomeMessage: string = `Welcome, ${test}`;
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
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;
//console.log("isAnyNumberEqualTo", isAnyNumberEqualTo);

// Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];
//console.log("stringValue", stringValue);
//console.log ("Hello, Typescript!");

// Ternary operator
const isPositiveNum: string =
  5 > 0 ? "The number is positive" : "The number is negative";
//console.log(typeof isPositiveNum); // връща типа на променливата

const age: number = 30;
const myName: string = "Pesho";

const personDescription =
  age < 40
    ? `${myName} is yonger than 40. He is ${age} years old.`
    : `${myName} is older than 40. He is ${age} years old.`;

const personName = `His name is "${myName}".`;
//console.log("personDescription", personDescription);
//console.log("personName", personName);

// If/ Else Statement
if (age < 40) {
  console.log("Age are lower than 40");
} else {
  console.log("Age are greater than 40");
}

const num1: number = 50;

if (num1 < 10) {
  console.log("the number is lower than 10.");
} else if (num1 > 100) {
  console.log("the number is greater than 100.");
} else {
  console.log("the number is between 10 and 100.");
}

// Type Alias
type PersonInfoType = string | number; // | e или

const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending" | "fullfiled";

const currentStatus: Status = "fullfiled";

type PersonData = {
  name: string;
  lastname: string;
  age: number;
  city: "Sofia" | "Plovdiv" | "Varna";
};
