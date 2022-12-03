const path = require("path");

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(path.resolve(__dirname, "..", "templates", "manager.html"), {
      name,
      id,
      email,
      office,
    });
    // this.name = name;
    // this.id = id;
    // this.email = email;
    // this.office = office;
  }
}
module.exports = Manager;
