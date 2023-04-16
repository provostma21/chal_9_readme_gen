// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Is there anything the user needs to install? If so, what?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users submit issues or test results for your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses are applicable to your project?',
        choices: ['MIT','Apache','BSD3','CC0','GNU GPL v3','None'],
    },
    
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        writeToFile('ReadMeSample.md', generateMarkdown(response));
    })
}

// Function call to initialize app
init();
