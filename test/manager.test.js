const fs = require("fs");
const Manager = require("../classes/manager");

test("can create new employee", async () => {
  //set up
  const newMan = new Manager();
  expect(typeof newMan).toBe("object");
});

test("Can set name", async () => {
  const name = "testName";
  const newMan = new Manager(name);
  expect(newMan.prompts.name).toBe(name);
});

test("Can set id", async () => {
  const id = 4;
  const newMan = new Manager("testName", id);
  expect(newMan.prompts.id).toBe(4);
});

test("Can set email", async () => {
  const email = "testEmail";
  const newMan = new Manager("testName", 4, "testEmail");
  expect(newMan.prompts.email).toBe(email);
});

test("Can set github", async () => {
  const office = "testOffice";
  const newMan = new Manager("testName", 4, "testEmail", office);
  expect(newMan.prompts.office).toBe(office);
});
