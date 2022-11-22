// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please describe your project in detail. What was your motivation? Does it solve a problem? If so, what? What did you learn?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'How do you use the project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'How can others contribute?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'How did you run tests for your project?',
    name: 'tests',
  },
  {
    type: 'list',
    message: "Please select a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'email',
    message: 'What is your email address?',
    name: 'email',
  }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated")
  });
}

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions)
    console.log("Creating your ReadMe...");
    
    //
    const markdown = generateMarkdown(answers)
    console.log(markdown)

    await writeFileAsync('ExampleREADME.md', markdown);


  } catch (error) {
    console.log(error)
  }
}

// Function call to initialize app
init ()