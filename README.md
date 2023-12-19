# Readify

This is a command-line application that dynamically generates a professional README.md file from a user's input.

## Table of Contents

- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [License](#license)

## User Story

When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:

- The title of my project

- Sections entitled:

- Description

- Table of Contents

- Installation

- Usage

- License

- Contributing

- Tests

- Questions

1. When a user enters the project title, it's displayed as the title of the README.

2. When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

3. When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

4. When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

5. When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

6. When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

## Technologies Used

- ES6 & NodeJS
- inquirer

## Installation

Clone the repository:

  ```markdownlint
   git clone git@github.com:ewelinasobora/readify.git
  ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
