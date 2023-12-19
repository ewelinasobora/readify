const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

// function to write README file
function writeToFile(fileName, data) {
  console.log("Before writing to file")
  fs.appendFile(fileName, data, (err) => {
    console.log("Inside appendFile")
    if (err) throw err;
    JSON.stringify(data)
    console.log("Data is appended to file successfully.");
  });
};

// function to initialize program
function init() {
  const fileName = process.argv[2];
  isFileProvided(fileName)

  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(fileName, generateMarkdown(answers));
    });
}

const isFileProvided = fileName => {
  if (!fileName) {
    throw new Error("fileName was not provided.");
  } else {
    return true;
  }
}

// function call to initialize program
init();
