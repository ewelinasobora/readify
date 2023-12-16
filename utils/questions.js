// array of requirements for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter the title of the project:"
  },
  {
    name: "sections",
    type: "input",
    message: "Enter the sections entitled (comma-separated):"
  },
  {
    name: 'description',
    type: 'input',
    message: 'Enter the contents of the Description section:',
    when: (answers) => answers.sections.split(",").includes("Description")
  },
];

module.exports = questions;
