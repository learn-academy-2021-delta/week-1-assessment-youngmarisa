// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length property used with a string will return a number data type of how many characters the string contains (including spaces)


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: [3] is asking for the character that lives at index 3 of the given string;
//    H lives at index 0, [1] -->e, [2]--> l, so [3]-->l.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The answer is Ruby because the input is asking what is the first index of the languages array
//    "JavaScript" lives at the zeroth index and "Ruby" lives at the first index



// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: expected ["SATURDAY", "SUNDAY"] but verified answer is :ERROR
// b) Verify and explain: .toUpperCase is a built in method of JS that converts the letters in a string to uppercase
//    HOWEVER, our variable in this case represents an array and .toUpperCase is a built in method for strings
//    each item or elements in an array must be a JS data type AND each element can be a different data type in the array
//    in order for this function to work, you need to convert the array to a string first using the .join() method
//    then you can use the .toUpperCase function for the newly converted string to capatilize the letters in the string
//    if you want the printed result to be an array, you can then convert the string back to an array using the .split() method after the .toUpperCase()

var weekendDaysString = weekendDays.join(" ");
console.log(weekendDaysString);
console.log(weekendDaysString.toUpperCase().split(" "));



// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// console.log(typeof dataTypes) --> null / "object"
// will return a string of what resulting data type will be

// console.log(dataTypes.length) --> number / "3"
// will return the number elements in the array

// a) Your answer: number
// b) Verify and explain: .length property in JS returns the number of elements in an array as a number data type.
//    typeof is a JavaScript operator that returns a string of what the expected data type will be (number, Boolean, string, symbol, undefined, null/object)
//    The answer will log what type of data string .length will produce which is a number data type
