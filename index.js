//let vs const
var number = 5;
number = 10;
//console.log ("number", number);
var message = "Welcome";
// String
var welcomeMessage = "Hello, Peter!";
var test = "Ivan";
var welcomeMessageLength = welcomeMessage.length;
//console.log ("welcomeMessageLength",welcomeMessageLength);
// string interpolation
var welcomeMessageDetails = "My welcome message length is ".concat(welcomeMessageLength);
var userWelcomeMessage = "Welcome, ".concat(test);
//console.log(userWelcomeMessage);
//Number
var firstNumber = 5;
var secondNumber = 10;
// Number math operations
var substract = firstNumber - secondNumber;
var add = firstNumber + secondNumber;
var multiply = firstNumber * secondNumber;
var divide = firstNumber / secondNumber; //ако ни интерсува остатъка вместо / изполваме %
//console.log("result", result);
//Boolean (true/false)
var isGreater = firstNumber > secondNumber;
//console.log("isGreater", isGreater);
var isLower = firstNumber < secondNumber;
var isEqual = firstNumber === secondNumber; // за различно се използва !==
var isGreaterOrEqual = firstNumber >= secondNumber;
var isLowerOrEqual = firstNumber <= secondNumber;
var areNumbersEqualTo = 5 === firstNumber && 10 === secondNumber;
//console.log("areNumbersEqualTo", areNumbersEqualTo);
var isAnyNumberEqualTo = 6 === firstNumber || 10 === secondNumber;
//console.log("isAnyNumberEqualTo", isAnyNumberEqualTo);
// Any
var stringValue = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];
//console.log("stringValue", stringValue);
//console.log ("Hello, Typescript!");
// Ternary operator
var isPositiveNum = 5 > 0 ? "The number is positive" : "The number is negative";
//console.log(typeof isPositiveNum); // връща типа на променливата
var age = 30;
var myName = "Pesho";
var personDescription = age < 40
    ? "".concat(myName, " is yonger than 40. He is ").concat(age, " years old.")
    : "".concat(myName, " is older than 40. He is ").concat(age, " years old.");
var personName = "His name is \"".concat(myName, "\".");
//console.log("personDescription", personDescription);
//console.log("personName", personName);
// If/ Else Statement
if (age < 40) {
    console.log("Age are lower than 40");
}
else {
    console.log("Age are greater than 40");
}
var num1 = 50;
if (num1 < 10) {
    console.log("the number is lower than 10.");
}
else if (num1 > 100) {
    console.log("the number is greater than 100.");
}
else {
    console.log("the number is between 10 and 100.");
}
var personNameInf = "Ivan";
var personAgeInf = 25;
var currentStatus = "fullfiled";
