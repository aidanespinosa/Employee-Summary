const fs = require("fs");
const Intern = require("../classes/Intern");

test("can create new employee", async () => {
  //set up
  const newIntern = new Intern();
  expect(typeof newIntern).toBe("object");
});

test("Can set name", async () => {
  const name = "testName";
  const newIntern = new Intern(name);
  expect(newIntern.prompts.name).toBe(name);
});

test("Can set id", async () => {
  const id = 4;
  const newIntern = new Intern("testName", id);
  expect(newIntern.prompts.id).toBe(4);
});

test("Can set email", async () => {
  const email = "testEmail";
  const newIntern = new Intern("testName", 4, "testEmail");
  expect(newIntern.prompts.email).toBe(email);
});

test("Can set school", async () => {
  const school = "testOffice";
  const newIntern = new Intern("testName", 4, "testEmail", school);
  expect(newIntern.prompts.school).toBe(school);
});
