#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


//printing a wellcome message
console.log(chalk.yellow("\n\tWelcome to \ Muhammad Khubaib \ CLI-simple calculator\n"));

// Asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message : "Enter first number", type: "number", name: "Firstnumber"},
    {message: "Enter second number", type: "number", name: "secondnumber"},
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "division"],
    },
])


// conditional statements if-else

if(answers.operator === "Addition"){
    console.log(answers.Firstnumber + answers.secondnumber)
}
else if(answers.operator === "Substraction"){
    console.log(answers.Firstnumber - answers.secondnumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.Firstnumber * answers.secondnumber)
}
else if(answers.operator === "division"){
    console.log(answers.Firstnumber / answers.secondnumber)
}
else{
    console.log(chalk.red("Invalid input"))
}