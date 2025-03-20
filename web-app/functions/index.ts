import { runInContext } from "vm";

//Functions
function greet(): void {
  console.log("hello to functions!");
}
//greet(); // извикваме функцията там, където ще я използваме
function multiplyNums(numberOne: number, numberTwo: number): number {
  return numberTwo * numberOne;
}
multiplyNums(2, 5);
//greet();

function displayGreeting(
  firstName: string,
  lastName: string,
  age: number
): string {
  return `hello, mr. ${lastName}, ${firstName}. You are ${age} years old.`;
}
// console.log(displayGreeting("ivan", "Ivanov", 30)) - би работело, но не е правилно, прави се с долното
const greeting: string = displayGreeting("ivan", "Ivanov", 30); //създаваме си променлива, за да може да се преизползва
console.log(greeting);

function displayPetInfo(name: string, animal: string, age?: number): string {
  return `${name} is ${animal} ${age ? `and is ${age} years old` : ""}.`;
}
//console.log(displayPetInfo("spike","dog"));
//console.log(displayPetInfo("Spike", "dog", 5));

function substractNumbers(
  firstNum: number = 10,
  secondNum: number = 5
): number {
  return firstNum - secondNum;
}
//console.log(substractNumbers());
console.log(substractNumbers(20));
