const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide your title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide your title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license',
        choices: ['None', 'MIT', 'GPL'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose your license')
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a brief description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your Github Username',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide your Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    },
];

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

// exports
module.exports = questions;