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
    when: (answers) => answers.sections.split(",").includes("description")
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Enter the contents of the Installation section:',
    when: (answers) => answers.sections.split(",").includes("installation")
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter the contents of the Usage section:',
    when: (answers) => answers.sections.split(",").includes("usage")
  },
  {
    name: 'licenseType',
    type: 'list',
    message: 'What type of license does your project have?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Other'],
    when: (answers) => answers.sections.split(",").includes("license")
  },
  {
    name: 'license',
    type: 'input',
    message: 'Enter the contents of the License section:',
    when: (answers) => answers.sections.split(",").includes("license")
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Enter the contents of the Contributing section:',
    when: (answers) => answers.sections.split(",").includes("contributing")
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Enter the contents of the Tests section:',
    when: (answers) => answers.sections.split(",").includes("tests")
  },
  {
    name: 'github',
    type: 'input',
    message: 'Enter your GitHub username:',
    when: (answers) => answers.sections.split(",").includes("questions")
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email address:',
    when: (answers) => answers.sections.split(",").includes("questions")
  },
  {
    name: 'other',
    type: 'input',
    message: 'Enter the contents of the Other section:',
    when: (answers) => answers.sections.split(",").includes(this.other)
  }
];

module.exports = questions;
