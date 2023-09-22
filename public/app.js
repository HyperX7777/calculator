#! /usr/bin/env node
import inquirer from "inquirer";
import { difference, divsion, product, sum } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answer = [
    {
        name: "First_Number",
        type: "number",
        message: gradient.cristal("Enter your first number:"),
        validate: (input) => {
            if (isNaN(input)) {
                return gradient.instagram("Please enter a number (use up arrow key to modify)");
            }
            return true;
        }
    }, {
        name: "Second_Number",
        type: "number",
        message: gradient.vice("Enter your second number:"),
        validate: (input) => {
            if (isNaN(input)) {
                return gradient.instagram("Please enter a number (use up arrow key to modify)");
            }
            return true;
        }
    }, {
        name: "Operation",
        type: "list",
        choices: ["Add", "Subtract", "Divide", "Multiply"],
        message: gradient.pastel("Choose your operation")
    }
];
let repeat = [
    {
        name: "again",
        type: "confirm",
        message: gradient.retro("Do you want to do more calculations?")
    }
];
(async () => {
    await showBanner('CALCULATOR', 'THIS CALCULATOR CAN PERFORM ADDITION, SUBTRACTION, DIVISION AND MULTIPLICATION', 'blue', 'white');
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { First_Number, Second_Number, Operation } = await inquirer.prompt(answer);
        if (Operation === "Add") {
            console.log("\n The sum of two numbers is =", sum(First_Number, Second_Number));
        }
        else if (Operation === "Subtract") {
            console.log("\n The difference of two numbers is =", difference(First_Number, Second_Number));
        }
        else if (Operation === "Divide") {
            console.log("\n The divsion of two numbers is =", divsion(First_Number, Second_Number));
        }
        else if (Operation === "Multiply") {
            console.log("\n The product of two numbers is =", product(First_Number, Second_Number));
        }
        let { again } = await inquirer.prompt(repeat);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 1000);
