const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const questionsAll = [
    {   
        type: "input",
        message: "What is the your name?",
        name: "Name"
    },
     {
        type: "input",
        message: "Please enter your ID.",
        name: "Id"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email"
    },
    {
        type: "list",
        message: "What is your Role?",
        name: "GetRole",
        choices: ["Employee","Manager","Engineer","Intern"]
    }
];

const questionsMgr = [{
     type: "input",
     message: "What is your Office Number?",
     name: "OfficeNumber",
     
     }
];

const questionsEgr = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "Github"
      }
];

const questionsIntern = [
      {
        type: "input",
        message: "What school are you attending?",
        name: "School"
      }
];      

 






// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

async function init() {
    try {
        const answersAll = await inquirer.prompt(questionsAll);
        console.log(answersAll.GetRole);
        switch(answersAll.GetRole){
            case "Manager":
              const answersMgr = await inquirer.prompt(questionsMgr);
              console.log(answersMgr);
                break;
            case "Engineer":
                const answersEgr = await inquirer.prompt(questionsEgr);
                console.log(answersEgr);
                break;
            case "Intern":
                const answersIntern = await inquirer.prompt(questionsIntern);
                console.log(answersIntern);
                break;
            default:

          };

    } catch(err) {
        console.log(err);
      }
}

init ();