const path = require("path");

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(path.resolve(__dirname, "..", "templates", "intern.html"), {
      name,
      id,
      email,
      school,
    });
    // this.name = name;
    // this.id = id;
    // this.email = email;
    // this.school = school;
  }
}
module.exports = Intern;
