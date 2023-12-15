const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of requirements for user input
const requirements = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project:"
  },
  {
    type: "input",
    name: "sections",
    message: "Enter the sections entitled (comma-separated):"
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description:"
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Enter the table of contents:"
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:"
  },
  {
    type: "input",
    name: "licence",
    message: "Enter the licence:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contributing guidelines:"
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions:"
  },
  {
    type: "input",
    name: "questions",
    message: "Enter the questions:"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {
    if (err) throw err;
    JSON.stringify(data)
    console.log("Data is appended to file successfully.");
  });
};

// function to initialize program
function init() {
  inquirer
    .prompt(
      requirements
    )
    .then((data) => {
      const fileName = process.argv[2];
      const generatedData = generateMarkdown(data);
      writeToFile(fileName, generatedData)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// function call to initialize program
init();
