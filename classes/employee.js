const fs = require("fs");
const renderTemplate = require("../utilities/renderTemplate");

//class for general employee which other classes will build off of
class Employee {
  constructor(templateFile, prompts) {
    this.templateFile = templateFile;
    this.prompts = prompts;
  }
  //reads html and replaces keys and values with data from prompts
  generate() {
    let contents = fs.readFileSync(this.templateFile, "utf8");
    return renderTemplate(contents, this.prompts);
  }
}
module.exports = Employee;
