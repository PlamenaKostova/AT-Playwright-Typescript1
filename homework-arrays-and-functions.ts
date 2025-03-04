//1. Create an array of strings and add a new element at the end of the array. Log the result.

let clothes: string[] = ["jacket", "t_shirt", "pants"];
clothes.push("skirt");
console.log("clothes", clothes);

//2. Create an array of numbers and remove the first element from the array. Log the result.

let numbers: number[] = [1, 2, 3, 4];
numbers.shift();
console.log("numbers", numbers);

//3.  Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5]. Log the result.
let numbersArray1: number[] = [1, 2, 3, 4, 5];
let divideNumbers = numbersArray1.map((element: number) => element / 2);
console.log("divideNumbers", divideNumbers);

//4.  Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4].Log the result.

let numbers1: number[] = [3, 7, 1, 9, 12];
let filterGreaterNums = numbers1.filter((element) => element > 5);
console.log("filterGreaterNums", filterGreaterNums);

//5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let numbers2: number[] = [9, 3, 7, 2, 8, 5];
let ascendingNums = numbers2.sort((a, b) => a - b);
console.log("ascendingNums", ascendingNums);

//6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let elements: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let extractElements = elements.slice(0, 3);
console.log("extractElements", extractElements);

//7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let elements1: string[] = ["car", "bike", "bus", "train", "boat"];
elements1.splice(1, 2);
console.log("removeSecondThird", elements1);

//8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.

function findLargest(
  firstNum: number = 10,
  secondNum: number = 30,
  thirtNum: number = 20
): number {
  if (firstNum >= secondNum && firstNum >= thirtNum) {
    return firstNum;
  } else if (secondNum >= firstNum && secondNum >= thirtNum) {
    return secondNum;
  } else {
    return thirtNum;
  }
}
console.log(findLargest());

//9. Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number = 1): number {
  const centimeters = inches * 2.54;
  return centimeters;
}
console.log("defaultResult", convertToCentimeters());
console.log("passedResult", convertToCentimeters(10));

//10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.

function calculateArea(width: number, height?: number): number {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}
const areaWithHeight = calculateArea(5, 10);
console.log("areaWithHeight", areaWithHeight);
const areaWithoutHeight = calculateArea(5);
console.log("areaWithoutHeight", areaWithoutHeight);
