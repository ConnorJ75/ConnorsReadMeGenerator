// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? ",
    },
    {
        type: "input",
        name: "email", 
        message: "What is your email address? ",
    },
    {
        type: "input",
        name: "project",
        message: "What is your project name? "
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project: "
    },  
    {
        type: "list",
        name: "license",
        message: "What is the license you are using?",
        choices: ["MIT", "Apache2.0", "Boost1.0", "NPL2.0", "BSD2", "BSD3"]
    },  
    {
        type: "input",
        name: "installCommand",
        message: "What command should be run to install dependencies?"
    },    
    {
        type: "input",
        name: "testsCommand",
        message: "What command should be run to run tests?"
    },  
    {
        type: "input",
        name: "repoInfo",
        message: "What does the user need to know about using the repo?"
    },  
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    },  
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //console.log(`\nFile Name: ${fileName} \nData: \n`);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log(responses);
        writeToFile("./README.md", generateMarkdown({responses}))
    });
}

// Function call to initialize app
init();
