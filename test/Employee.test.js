const Employee = require("../classes/employee");
const fs = require("fs");

jest.mock("fs");

test("Can initialize an new employee", async () => {
  //set up
  const templateFile = "/templates/mockTemplate";
  const prompts = { key: "value" };
  //code under test
  const mockEmployee = new Employee(templateFile, prompts);
  //verification
  expect(mockEmployee.prompts).toBe(prompts);
  expect(mockEmployee.templateFile).toBe("/templates/mockTemplate");
  expect(typeof mockEmployee).toBe("object");
});

test("Can input values from prompt into html template", async () => {
  const template = "/template.html";
  const values = { key: "value" };
  const employee = new Employee(template, values);

  fs.readFileSync.mockReturnValue("{key}");
  generatedHtml = employee.generate();

  expect(generatedHtml).toBe("value");
});
