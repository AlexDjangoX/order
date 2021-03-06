// dependency injection
// composition

class Item {
  name() {
    return "I am method, available to any instance of the Item class";
  }
}

class Calculator {
  calculate() {
    return "I am a calculator in the Calculator Class";
  }
}

class Child {
  calculate() {
    return "I am a calculator in the Child Class";
  }
}

class AgedBrie {
  constructor(item) {
    // dependency injection, composition
    this.item = item;
  }

  sayName() {
    return this.item.name();
  }

  calculateAge(arg) {
    // dependency injection
    return arg.calculate(); // polymorphism
  }
}

const item = new Item();
const agedBrie = new AgedBrie(item); // composing AgedBrie from Item (we needed functionality of Item) and so dependency is injected

const calculator = new Calculator();
const child = new Child();

console.log(agedBrie.sayName());
console.log(agedBrie.calculateAge(calculator)); // dependency is injected
console.log(agedBrie.calculateAge(child)); // dependency is injected
