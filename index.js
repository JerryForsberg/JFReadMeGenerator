var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');


const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project'

    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Please list a table of contents'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install this application'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?'

    },
    {
        type: 'input',
        name: 'licensing',
        message: 'What licensing was used for this project?'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe the testing used for this project'

    }

]).then(answer => {
    console.log("answser is", answer);
    const markdownFileData = generateMarkdown(answer);
    console.log("after marking down", markdownFileData);

    writeToFile("Readme.md", markdownFileData);
})


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}

function init() {
}

init();
