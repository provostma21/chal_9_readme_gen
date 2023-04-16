// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is you GitHub Repository Link for the project?',
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
        choices: [licenseList.name],
    },
    
];




// TODO: Create a function to write README file
function writeToFile = ({ username, link, email, title, description, install, usage, contribute, test, license }) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
