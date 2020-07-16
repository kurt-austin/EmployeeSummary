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


// Write code to use inquirer to gather information about the development team members,
const questionsMgr = [
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



async function Mgr() {
  try {
    const answersMgr = await inquirer.prompt(questionsMgr);


    let employee = new Manager(answersMgr.name, answersMgr.id, answersMgr.email, answersMgr.officeNumber);
    employeesArr.push(employee);
    switch (answersMgr.role) {
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



  } catch (err) {
    console.log(err);
  }
}



Mgr();


async function Egr() {
  try {
    const answersEgr = await inquirer.prompt(questionsEgr);
    let employee = new Engineer(answersEgr.name, answersEgr.id, answersEgr.email, answersEgr.github);
    employeesArr.push(employee);
    switch (answersEgr.role) {
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
  } catch (err) {
    console.log(err);
  }
};


async function Int() {
  try {
    const answersIntern = await inquirer.prompt(questionsIntern);
    let employee = new Intern(answersIntern.name, answersIntern.id, answersIntern.email, answersIntern.school);
    employeesArr.push(employee);
    switch (answersIntern.role) {
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
  } catch (err) {
    console.log(err);
  }
};


function createFile (){
  if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath , render(employeesArr), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}