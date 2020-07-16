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
const questionsMgr = [
  {
    type: "input",
    message: "What is the your Manager's name?",
    name: "Name"
  },
  {
    type: "input",
    message: "Please enter your Manager's ID?",
    name: "Id"
  },
  {
    type: "input",
    message: "What is your Manager's email address?",
    name: "Email"
  },
  {

    type: "input",
    message: "What is your Office Number?",
    name: "OfficeNumber",

  },
  

];

 const quesTeamChoice = [
   {
   type: "list",
   message: "Which type of team member would you like to add?",
   name: "Role",
   choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }

]


const questionsEgr = [
  {
    type: "input",
    message: "What is the your Engineer's name?",
    name: "Name"
  },
  {
    type: "input",
    message: "Please enter your Engineer's ID?",
    name: "Id"
  },
  {
    type: "input",
    message: "What is your Engineer's email address?",
    name: "Email"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },


];

const questionsIntern = [
  {
    type: "input",
    message: "What is the your Intern's name?",
    name: "Name"
  },
  {
    type: "input",
    message: "Please enter your Intern's ID?",
    name: "Id"
  },
  {
    type: "input",
    message: "What is your Intern's email address?",
    name: "Email"
  },
  {
    type: "input",
    message: "What school does the intern attend?",
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

async function Mgr() {
  try {
    const answersMgr = await inquirer.prompt(questionsMgr);
    // console.log(answersMgr);
    // answersMgr["Role"] ="Employee";
    // console.log(answersMgr);
    // console.log(typeof(answersMgr));


    const employee = new Manager(answersMgr.Name, answersMgr.Id, answersMgr.Email, answersMgr.OfficeNumber);
    // console.log(a);
    // teamChoice();
    render(employee);
    
    console.log("i am back")
    // console.log(answersTeamChoice.Role);

  } catch (err) {
    console.log(err);
  }
}



Mgr();
// render(employee);

async function teamChoice() {
  const answersTeamChoice = await inquirer.prompt(quesTeamChoice)
  // console.log(answersTeamChoice.role)
  // console.log(questTeamChoic.choices)
  // console.log(answersTeamChoice);
  // console.log(answersTeamChoice.Role);
  console.log("teamchoice");
  switch (answersTeamChoice.Role) {
    case "Engineer":
      Egr();
      break;
    case "Intern":
      Int();
      break;
    case "I don't want to add any more team members":
      console.log("I am here kurt")
      // console.log(a);
      // render(a);
    


  }

}


async function Egr() {
  const answersEgr = await inquirer.prompt(questionsEgr);
  teamChoice();

};


async function Int() {
  const answersIntern = await inquirer.prompt(questionsIntern);
  teamChoice();

};


