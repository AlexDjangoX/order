// swap strategies
// different shipping costs for different companies

function Fedex() {
  this.calculate = (package) => {
    console.log("fedex: 7.29");
    return 7.29;
  };
}

function UPS() {
  this.calculate = (package) => {
    console.log("UPS: 2.34");
    return 2.34;
  };
}

function USPS() {
  this.calculate = (package) => {
    console.log("USPS: 3.18");
    return 3.18;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

// strategy

const packaged = { from: "here", to: "there" };
const shipping = new Shipping();

shipping.setStrategy(new Fedex());
shipping.calculate(packaged);
shipping.setStrategy(new UPS());
shipping.calculate(packaged);
shipping.setStrategy(new USPS());
shipping.calculate(packaged);

// not strategy

// const fedex = new Fedex();

const package = { from: "here", to: "there" };
new Fedex().calculate(package);
new UPS().calculate(package);
new USPS().calculate(package);

class Salaried {
  constructor(employeeDetails, paymentDetails) {
    this.name = employeeDetails.name;
    this.salary = paymentDetails.salary;
  }

  sendPayment() {
    let paymentAmount = (this.salary / 12).toFixed(2);
    console.log(`Sending $${paymentAmount} to ${this.name}`);
    return paymentAmount;
  }
}

class Hourly {
  constructor(employeeDetails, paymentDetails) {
    this.name = employeeDetails.name;
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numberHours = paymentDetails.numberHours;
  }

  sendPayment() {
    let paymentAmount = (this.hourlyRate * this.numberHours).toFixed(2);
    console.log(`Sending $${paymentAmount} to ${this.name}`);
    return paymentAmount;
  }
}

class Payroll {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sendPayment() {
    return this.strategy.sendPayment();
  }
}

let hourly = new Hourly({ name: "Bob" }, { hourlyRate: 35, numberHours: 30 });
// console.log(hourly.sendPayment());
let salaried = new Salaried({ name: "Jennifer" }, { salary: 135000 });
// console.log(salaried.sendPayment());
let payroll = new Payroll();
payroll.setStrategy(hourly);
console.log(payroll.sendPayment());

payroll.setStrategy(salaried);
console.log(payroll.sendPayment());
