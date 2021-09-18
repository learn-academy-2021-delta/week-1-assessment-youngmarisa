# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is git? What is the difference between git and Github?

  Your answer: Github is an online database where you can store coded projects. Similar to the Cloud, you can store your code online without having it on your main computer. It is a way to save and document every step you have made in a coding project. You can access and see what changes have been made throughout the code by you or by other people. It is also a way for multiple people to work on the same code at the same time. By cloning the code from the main, each person can create their own branch and add their own code and add it back to main when finished. When everyone working on the code has completed their portion, you can merge the code to the main to finalize it. Git is a command used in the terminal that is used to access the code from Github. By using the git command you can clone the code from the main, create the branch, work on the code and then push it back to Github so someone else can pull it back and work on it.

  Researched answer: Git stands for Global Information Tracker and it is an open-source version control system. It is a software used by developers to track changes in files. It allows multiple developers to collaboratively develop and work on the same base code. It allows the entire history of the codebase to be accessible and available on every developer's computer. Github is an online git repository that stores code for developers to manage, track and control changes to the code.



2. What types of evaluations will return a Boolean value?

  Your answer: Boolean is a JavaScript data type that evaluates data and returns a true or false value. The Boolean data type are primarily used for comparisons. For example; is (100>10)--> true or is (10>100)--> false.

  Researched answer:Boolean is a JavaScript data type used for comparisons that return a true or false value; they are not strings. There are three type of operators that will return a Boolean value: equality operators, relational operators, and logical operators. Equality operators compares two values and determines if they equate to the same. There are two types of equality operators. Loose equality operators ("==") will convert the two values to the same data type before comparing them. For example, when comparing a number to a string such as this (5 == "5"), the loose equality operator will convert the number and string to the same data type and will result to a true Boolean value. The strict equality operator is used to only compare data types that are the same by using the ("==="). So an evaluation that compares (5==="5") with the strict equality operator will return a a Boolean value of false because the two data types being compared are a string and a number. Relational operators look to see if one value is greater than (>), less than (<), greater than or equal to (>=), or less than or equal to (<=) another value. For example, is (10>=5)--> true. Logical operators use &&, ||, ! to compare values. The And operator returns a true value when it evaluates that both sides of the equation are true. For example is (10>=5 && 5>=0)--> true. If both sides of the equation are not equal then the evaluation will return a false value. The Or operator will only look to see if one side of the equation is at least true. Is (10>=5 || 0>=5)--> true; is (5>=10 || 0>=5)--> false. The bang operator will return the logical opposite. So if (!true)--> false.



3. What is an index? What is the difference between index and value?

  Your answer: Index is where a specific character or element lives either within a string or in an array. The first character in a string and the first element in an array are at the zeroth index. The index will always be one less than the length property for a string or array. For example: in the string "Learn Academy" the zero index will output "L" and the first index will be "e" and so forth. In an array ["Learn", "Academy"] the zero index is "Learn" and the first index is "Academy". Values represent pieces of information. A value must be a JavaScript data type and they are typically assigned a name and a variable so it can referenced in different sections of the code. For example, var students = 21 meaning the value of students is 21.

  Researched answer: An index is used to reference the address of a specific character or element. Each character in a string and each element in an array can be accounted for by its placement. Strings and arrays are zero-indexed meaning the first character or element has the place holder of 0 and each character/element after will be an added place holder. Value are expressed in JavaScript data types that hold pieces of information that can be referenced and used throughout code by giving the value a name.



4. What is a built-in method?

  Your answer: A built-in method are properties that have been pre-programmed into the JavaScript language to making coding more functional. An example of a built-in method is .length which will return the number of characters in an array or string.

  Researched answer: Built-in methods are functions that have been added to the JavaScript language and built into the application in order for it to be accessed by the user to accomplish a common task. These are pre-defined in the program so the user does not need to create their own function.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming allows for two people to work collaboratively on a code. With good communication, two people can map out the diagram for the code and work on it together. One person will act as the driver meaning they are the ones typing out the code on their own computer while the other person acts as the navigator. Roles are frequently switched for new perspective and practice. The navigator will be directing what the driver should be coding out. Having two people program together allows each person to hold the other accountable and allows for less mistakes since you will have two sets of eyes.

  Researched answer: Pair programming is a software development technique that allows for two programmers to code on one computer. One will act as the driver who is responsible for actively listening to the navigator and entering in the information given by the navigator. Pair programming requires constant communication. Roles should be switched frequently by setting a timer. By having a designated role, it can allow one to focus on a specific thing. Pair programming can also reduce coding mistakes by having two sets of eyes. By frequently switching roles, you can have a deeper understanding of the code.
   By frequently switching roles, it can allow you to focus on



6. What is something we did in class this week you found helpful?  

  Your answer: Pair programming was very helpful for me to understand how to use Git and Github. By having multiple people explain the steps in their own way allowed me to have a better understanding on how to clone the main, and create my own branch that I can code on. It also helped to practice pushing and pulling branches between me and my classmate.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Iteration: is the process of repetition of an action until a condition is met.

2. Higher Order Functions: are JavaScript built in methods that act on arrays. They are functions that operate on other functions. They do so by either taking in a function as an argument or by returning it as an output.

3. Jest: ensures correctness of Javascript codebase using a JS testing framework.

4. Objects: are a JavaScript data type that collections of key:value pairs. Objects can contain many values and are a cross section of data and behavior.

5. Classes: are a function that contain data and behavior. They are the blueprint for objects and can be reusable. 
