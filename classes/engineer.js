const path = require("./path");

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(path.resolve(__dirname, "..", "templates", "engineer.html"), {
      name,
      id,
      email,
      github,
    });
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
}
module.exports = Engineer;
