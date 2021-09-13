// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// 1. declare a variable
// 2. set that variable to describe temperature
// 3. set the variable to a data type that describes the temperature;
//      in this case, set the variable to a number data type that describes what the temperature is at
// 4. write a conditional statement to decide the output based on what the variable is set to;
//      in this case, the output would be "below boiling", "at boiling", or "above boiling".
// 5. since there are three possible outputs, write a if(){}else if () {}else {} conditional statement
//      so if the temperature is 212 then the string outcome would be "X is at boiling,"
//        if this statement is not true then the temperature is either below or above 212
//        the if/elseif/else statement will continue to run until the condition is met
//      if the temperature is below 212 then the string outcome would be "X is below boiling"
//      but if the temperature is not 212 or below (aka greater than 212) then the string outcome would be "X is above boiling"
// 6. test the conditional statement by declaring variables that are less than 212, equal to 212, and greater than 212
//


// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212

if (temp === 212) {
  console.log("212 is at boiling point");
// if the temperature is equal to 212 then print out the string "212 is at boiling point"
}else if (temp === 35) {
  console.log("35 is below boiling point");
// if the temeprature is not equal to 212, continue running till conditional is met
// if the temperature is 35 then print out the string "35 is below boiling point"
}else {
console.log("350 is above boiling point");
// if the temperature is not 212 AND is not below 212, then the temperature must be above 212
// so the conditional will be met and the string will print out "350 is above boiling point"
}

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below.
// Expected output: 10

// 1. declare two variables and name them according to what information they will be holding
// 2. assign the variables (using an =) to an array using []
// 3. the array must be a list containing data types (in this case the two arrays will contain a list of numbers)
// 4. to combine the arrays, use the accessor method .concat() after the first variable
// 5. placing the second variable in between the () after .concat will add the list of data types in the second array to the first array
// 6. once the arrays are combined, add the .length property to obtain the number of elements listed in the combination of the two arrays

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length);

// var myNumbersCombo = myNumbers1.concat(myNumbers2)
// console.log(myNumbersCombo.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below.
// Expected output: "eilrahc", "atled"

//1. declare a new variable and name it to reflect the information it will be holding
//    assign the variable to a string, in this case the first variable is set to "charlie" and the second variable is "delta"
//2. in order to reverse the letters, you need to convert the string to an array by using the .split("") function
//    this will seperate the characters in the string to represent individual elements in an array
//    ['c', 'h', 'a', 'r', 'l', 'i', 'e']
//3. once the characters are seperated in the array, reverse the order of the elements by using the .reverse() function
//    ['e', 'i', 'l', 'r', 'a', 'h', 'c']
//4. now that elements have been placed in a reverse order, convert the array back to a string by using the .join("") function

var myString1 = "charlie"
var myString2 = "delta"


console.log(myString1.split("").reverse().join(""));
console.log(myString2.split("").reverse().join(""));



// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below.
// Expected output: 15, 12

// 1. declare two variables and name them to describe the information it is holding
//      in this case, we are subracting one number from the other so the data type for each variable will be a number
//      name the first variable number1 and the second variable number2
// 2. create a conditional if/else statement
//      if the first variable is greater than the second, we will subtract number2 from number1
//      if the first condition is not met then the conditonal will keep running; which means the second variable is greater
//      if the second variable is larger than the first variable, we will subtract number1 from number2`

// var number1 = 42
// var number2 = 27

var number1 = 7
var number2 = 19

if(number1>number2){
  console.log(number1-number2)
}else {
  console.log(number2-number1);
}

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases.
// Inform your user if the variable is not a number using the two sets of test variables provided below.
// Expected output: "Your input is not a number", 3


// 1. declare two variables and name them to describe the information it is holding
//      in this case, we are subracting one number from the other so the data type for each variable will be a number
//      name the first variable number1 and the second variable number2
// 2. create a conditional if/else if/else statement
//      if the first variable is greater than the second, we will subtract number2 from number1
//      if the first condition is not met then the conditonal will keep running;
//      if the second variable is larger than the first variable, we will subtract number1 from number2
//      if the second condition is still not met then it is possible one of the variables is a non-number data type
//      the else statement will contain a string output that says "Your input is not a number." which will end the conditional



 var numberRefactor1 = 42
 var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24

if(numberRefactor1>numberRefactor2){
  console.log(numberRefactor1-numberRefactor2);
}else if (numberRefactor2>numberRefactor1) {
  console.log(numberRefactor2-numberRefactor1);
} else {
  console.log("Your input is not a number.");
}
