const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./classes/employee.js"),
const Engineer = require("./classes/engineer.js");
const Intern = require("./classes/intern.js");
const Manager = require("./classes/manager.js");

const renderTemplate = require("./utilities/renderTemplate.js");
const internal = require("stream");

const mainTemplateFile = path.join(__dirname, "templates", "template.html");
const resultsTemplateFile = path.resolve(__dirname, "templates", "results.html");

const mainTemplateData = fs.readFileSync(mainTemplateFile,"utf8");

const renderedTemplateData = renderTemplate(mainTemplateData, {
  employee: Engineer.generate() + '\n' + Intern.generate() + '\n' + Manager.generate()
});


inquirer
  .prompt([
    {
      type: "input",
      name: "manager",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
  ])
  .then((response) => {
    console.log(response);
  });
