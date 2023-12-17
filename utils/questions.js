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
  {
    name: 'tableOfContents',
    type: 'input',
    message: 'Enter the contents of the Table Contents section:',
    when: (answers) => answers.sections.split(",").includes("Table of Contents")
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Enter the contents of the Installation section:',
    when: (answers) => answers.sections.split(",").includes("Installation")
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter the contents of the Usage section:',
    when: (answers) => answers.sections.split(",").includes("Usage")
  },
  {
    name: 'license',
    type: 'input',
    message: 'Enter the contents of the License section:',
    when: (answers) => answers.sections.split(",").includes("License")
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Enter the contents of the Contributing section:',
    when: (answers) => answers.sections.split(",").includes("Contributing")
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Enter the contents of the Tests section:',
    when: (answers) => answers.sections.split(",").includes("Tests")
  },
  {
    name: 'questions',
    type: 'input',
    message: 'Enter the contents of the Questions section:',
    when: (answers) => answers.sections.split(",").includes("Questions")
  },
  {
    name: 'github',
    type: 'input',
    message: 'Enter your GitHub username:',
    when: (answers) => answers.sections.split(",").includes("Questions")
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email address:',
    when: (answers) => answers.sections.split(",").includes("Questions")
  },
  {
    name: 'other',
    type: 'input',
    message: 'Enter the contents of the Other section:',
    when: (answers) => answers.sections.split(",").includes(this.other)
  }
];

module.exports = questions;
