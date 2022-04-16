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
