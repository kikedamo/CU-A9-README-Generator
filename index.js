// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What will You Call The File?',
    name: 'title',
},
{
    type: 'input',
    message: 'What was your motivation?',
    name: 'motivation',
},
{
    type: 'input',
    message: 'Why did you build this project?',
    name: 'project',
},
{
    type: 'input',
    message: 'What problem does it solve?',
    name: 'problem',
},
{
    type: 'input',
    message: 'What did you learn?',
    name: 'learn',
},
{
    type: 'input',
    message: 'What makes your project stand out?',
    name: 'stand',
},
{
    type:'list',
    message:'please pick a license',
    name:'license',
    choices: ["MIT", "Apachie", "Others"]
}]
// TODO: Create a function to write README file
function writeToMd() {
    inquirer 
    .prompt(questions)
    .then((data) => {
        console.log(data)
        fs.writeFile(`${data.title}.md`, init(data), (err) => err ? console.log(err) : console.log('Enjoy your Readme File'))
    });
};

// TODO: Create a function to initialize app
function init(data) {

    return`# The README Files Made From Node.JS
## Question 1
### What was your motivation?
${data.motivation}
## Question 2
### Why did you build this project?
${data.project}
## Question 3
### What problem does it solve?
${data.problem}
## Question 4
### What did you learn?
${data.learn}
## Question 5
### What makes your project stand out?
${data.stand}
## License
${data.license}
![License](https://img.shields.io/github/languages/top/lernantino/${data.license})
## Badge
https://img.shields.io/badge/Davis-MIT-ED0800
`
}

// Function call to initialize app
writeToMd();
