//for...of loop
let fruits1: string[] = [`Apple`, `Banana`, `Peach`, "Watermelon"];

//for...of loop access only array values
for (let fruit of fruits1) {
  //console.log("fruit", fruit);
  // console.log(`fruit is ${fruit}`);
}

//for...of over array of numbers
let numbers: number[] = [10, 20, 30, 40];
for (let number of numbers) {
  if (number > 20) {
    console.log(`NUmber is ${number}`);
  } else {
    //console.log(`NUmber plus 5 is ${(number = 5)}`);
    console.log(`${number} plus 5 is ${(number = 5)} `);
  }
}
//for ...of over string
let message: string = "Hello world!";
for (let letter of message) {
  //console.log("Letter ", letter);
  if (letter === "o") {
    console.log(letter.replace("o", `@`));
  } else {
    console.log(letter);
  }
}

//for...in over object
interface Student {
  name: string;
  lastname: string;
  age: number;
}
const student: Student = { name: "Pesho", lastname: "Petrov", age: 20 };

for (let key in student) {
  //console.log(key);
  //accessing object value by passing object key as keyof Student
  console.log(`${key} = ${student[key as keyof Student]}`);
}

//for...in over array
let numsArr: number[] = [35, 25, 45, 50];
for (let index in numsArr) {
  //console.log(index);
  //accessing array value by passing array index
  console.log(`${index} = ${numsArr[index]}`);
}

// for loop
for (let i = 0; i <= 5; i++) {
  console.log(`Index ${i}`);
}

// for loop over array
let numbersArr: number[] = [35, 25, 45, 50, 35, 35, 45, 50, 45, 50];
for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] <= 25) {
  } else {
    console.log(numbersArr[i] / 2);
  }
}
//for loop incrementation
//for (let i = 0; i < 10; i++) {
//console.log(i);
//}
//for loop
//for (let i = 0; i < 10; i += 2) {
// console.log(i);
//}

// for loop decremantation

for (let i = 30; i >= 0; i--) {
  //console.log(i);
}

export {};
