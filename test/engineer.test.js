const fs = require("fs");
const Engineer = require("../classes/Engineer");

test("can create new employee", async () => {
  //set up
  const newEngin = new Engineer();
  expect(typeof newEngin).toBe("object");
});

test("Can set name", async () => {
  const name = "testName";
  const newEngin = new Engineer(name);
  expect(newEngin.prompts.name).toBe(name);
});

test("Can set id", async () => {
  const id = 4;
  const newEngin = new Engineer("testName", id);
  expect(newEngin.prompts.id).toBe(4);
});

test("Can set email", async () => {
  const email = "testEmail";
  const newEngin = new Engineer("testName", 4, "testEmail");
  expect(newEngin.prompts.email).toBe(email);
});

test("Can set github", async () => {
  const github = "testOffice";
  const newEngin = new Engineer("testName", 4, "testEmail", github);
  expect(newEngin.prompts.github).toBe(github);
});
