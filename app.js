const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");
const employeesArr = [];

// Questions for Manager 
const questionsMgr = [
  {
    type: "input",
    message: "Please build your team.",
    name: "team"
  },
  {
    type: "input",
    message: "What is the your Manager's name?",
    name: "name"
  },
  {
    type: "input",
    message: "Please enter your Manager's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your Manager's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your Office Number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "role",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }

];

// Questions for Engineer

const questionsEgr = [
  {
    type: "input",
    message: "What is the your Engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "Please enter your Engineer's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your Engineer's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "role",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }

];

// Questions for Intern

const questionsIntern = [
  {
    type: "input",
    message: "What is the your Intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "Please enter your Intern's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your Intern's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What school does the intern attend?",
    name: "school"
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "role",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }
];

// Manager Processing

async function Mgr() {
  try {
    let answers = await inquirer.prompt(questionsMgr);
    let employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    pushAndAdd(employee, answers);

  } catch (err) {
    console.log(err);
  }
}

// Engineer Processing

async function Egr() {
  try {
    let answers = await inquirer.prompt(questionsEgr);
    let employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
    pushAndAdd(employee, answers)

  } catch (err) {
    console.log(err);
  }
};


// Intern Processing 

async function Int() {
  try {
    let answers = await inquirer.prompt(questionsIntern);
    let employee = new Intern(answers.name, answers.id, answers.email, answers.school);
    pushAndAdd(employee, answers)

  } catch (err) {
    console.log(err);
  }
};


// Renders Team.html 
function createFile() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(employeesArr), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// Pushes instantiated employee class to Array.  When no more team members are added, send the array to the Render function called in htmlRenderer.js.

function pushAndAdd(employee, answers) {
  employeesArr.push(employee);
  switch (answers.role) {
    case "Engineer":
      Egr();
      break;
    case "Intern":
      Int();
      break;
    case "I don't want to add any more team members":
      render(employeesArr);
      createFile();
      break;
  }

}

// Call the initial Manager questions.

Mgr();