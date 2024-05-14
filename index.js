#! /usr/bin/env node
//3.Calculator project using function:
//• Set up two variables containing number values.
//• Set up a variable to hold an operator (+ or -).
//• Create a function that takes two numbers and an operator as parameters, performs the 
//  corresponding operation, and returns the result.
//• Call the function with the variables and operator, and output the result using console.log.
//• Update the operator value and call the function again with the updated arguments.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Please Enter firstNumber :"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Please Enter secondNumber :"
    },
    {
        name: "Operator",
        type: "list",
        message: "Select one of the operator to perform operation",
        choices: ["Addition", "Subtraction"]
    }
]);
let { firstNumber, secondNumber, Operator } = answer;
function number(num1, num2, operation) {
    switch (operation) {
        case "Addition":
            return `The sum of ${num1} && ${num2} is : ${num1 + num2}`;
            break;
        case "Subtraction":
            return `The difference of ${num1} && ${num2} is : ${num1 - num2}`;
            break;
        default: {
            console.log("Please Enter a valid number");
        }
    }
}
let response = number(firstNumber, secondNumber, Operator);
console.log(response);
