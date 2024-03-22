#! /usr/bin/env node
// shabang 
import inquirer from "inquirer";

import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addition") {
  console.log(
    chalk.green(
      "your answer is",
      chalk.yellow.bold(answer.firstnumber + answer.secondnumber)
    )
  );
} else if (answer.operator === "subtraction") {
  console.log(
    chalk.green(
      "your answer is",
      chalk.yellow.bold(answer.firstnumber - answer.secondnumber)
    )
  );
} else if (answer.operator === "multiplication") {
  console.log(
    chalk.green(
      "your answer is",
      chalk.yellow.bold(answer.firstnumber * answer.secondnumber)
    )
  );
} else if (answer.operator === "division") {
  console.log(
    chalk.green(
      "your answer is",
      chalk.yellow.bold(answer.firstnumber / answer.secondnumber)
    )
  );
} else {
  console.log(chalk.green("Please select valid operator."));
}

