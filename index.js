const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//require classes
// const Employee = require("./classes/employee.js");
const Engineer = require("./classes/engineer.js");
const Intern = require("./classes/intern.js");
const Manager = require("./classes/manager.js");
//pull in render template function
const renderTemplate = require("./utilities/renderTemplate.js");

const distpath = path.join(__dirname, "dist");

// const resultsTemplateFile = path.resolve(
//   __dirname,
//   "..",
//   "templates",
//   "results.html"
// );
const resultshtmlFile = path.resolve(__dirname, "templates", "results.html");
const resultsData = fs.readFileSync(resultshtmlFile, "utf8");

const employees = [];

// const employees2 = [];

//Manager Prompt

const questions = async () => {
  const manswers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name:",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee id?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
  ]);

  const newManager = new Manager(
    manswers.name,
    manswers.id,
    manswers.email,
    manswers.office
  );
  employees.push(newManager);

  // writeTemplate();

  // Engineer Prompt
  const eanswers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name:",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee id?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
  ]);

  const newEngineer = new Engineer(
    eanswers.name,
    eanswers.id,
    eanswers.email,
    eanswers.github
  );
  employees.push(newEngineer);

  //Intern Prompt
  const ianswers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name:",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee id?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What school did you attend?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
  ]);

  const newIntern = new Intern(
    ianswers.name,
    ianswers.id,
    ianswers.email,
    ianswers.school
  );
  employees.push(newIntern);
  // employees2.push(generate2("intern.html", ianswers));

  writeTemplate();
};
questions();

const writeTemplate = function () {
  let employeeData = "";
  for (employee of employees) {
    employeeData += employee.generate();
  }
  // for (employee of employees2) {
  //   employeeData += employee;
  // }
  const finalTemplate = renderTemplate(resultsData, {
    content: employeeData,
  });
  console.log(finalTemplate);
  if (!fs.existsSync(distpath)) {
    fs.mkdirSync(distpath);
  }
  fs.writeFileSync(path.join(distpath, "index.html"), finalTemplate);
};

// const getTemplateHtmlFilePath = function (htmlFileName) {
//   return path.resolve(__dirname, "./", "templates", htmlFileName);
// };

// const getTemplateHtmlFile = function (htmlFilePath) {
//   return fs.readFileSync(htmlFilePath, "utf8");
// };

// function renderTemplate2(template, values) {
//   for (const [key, value] of Object.entries(values)) {
//     template = template.replace(`{${key}}`, value);
//   }
//   return template;
// }
// const generate2 = function (htmlFileName, values) {
//   return renderTemplate2(
//     getTemplateHtmlFile(getTemplateHtmlFilePath(htmlFileName)),
//     values
//   );
// };
