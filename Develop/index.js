// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your proyect'
    },

    {
        type: 'input',
        name: 'description',
        message: 'provide a description of your project'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your proyect? provide a step-by-step'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'

    },

    {
        type: 'list',
        name: 'license',
        message: 'Chose the appropiate license for this project: ',
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT', 
            'Mozilla', 
            'Open'
        ]
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Is there a test included'
    },

    {
        type: 'input',
        name: 'questions',
        message: 'what to do if there is an issue?'
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: '
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw new Error(err);
    } else {
        console.log('It worked');
    }
    })
}
 

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) =>{
        console.log(`github name = ${data.username}`)
        return writeToFile('../README.md', generateMarkdown(data));
    })
}


// Function call to initialize app
init();