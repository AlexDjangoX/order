// creational pattern to create objects

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
      default:
        return `Please add valid type`;
    }
  };
}

const emplyeeFactory = new EmployeeFactory();
const employees = [];

employees.push(emplyeeFactory.create("Alice", 2));
console.log(employees);

class Developers {
  constructor(name, type) {
    this.name = name;
    this.type = "Developer";
  }
}

class Testers extends Developers {
  constructor(name, type) {
    super(name);
    this.type = "Tester";
  }
}

class Factory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Developers(name);
      case 2:
        return new Testers(name);
      default:
        return `Enter valid type`;
    }
  }
}

function greet() {
  return `I am ${this.name} and I am a ${this.type}`;
}

const factoryClass = new Factory();
const employeeList = [];

employeeList.push(factoryClass.create("AlexDjangoX", 1));
employeeList.push(factoryClass.create("Alex", 2));
employeeList.push(factoryClass.create("DjangoX", 1));
employeeList.push(factoryClass.create("AlexX", 2));
console.log(employeeList);

employeeList.forEach((el) => {
  return console.log(greet.call(el));
});
