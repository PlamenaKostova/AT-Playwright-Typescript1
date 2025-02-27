// Arrays
let numbersArray: number[] = [1, 2, 3, 4];

let stringAndNumsArr: number | string[] = [`pesho`, `gosho`];

let fruits: string[] = ["apple", "banana", "pear", "peach", "grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];
//console.log("firstEl", firstEl);

fruits.push("mango");
//console.log("fruits", fruits);

numbersArray.pop();
//console.log("numberArray", numbersArray);

fruits.shift();
//console.log("fruits", fruits);

numbersArray.unshift(5);
//console.log("numberArray", numbersArray);

let multiplyNumbers = numbersArray.map((element: number) => element * 2);
let multiplySpecialNumber = numbersArray.map((element: number) => {
  if (element > 2) {
    return element * 2;
  } else {
    return element;
  }
});
//console.log("multiplyNumbers", multiplyNumbers);

let filterNumsArray = numbersArray.filter((element) => element > 2);
//console.log("filterNumArray", filterNumsArray);
