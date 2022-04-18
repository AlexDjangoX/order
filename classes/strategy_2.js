class SalaryStrategy {
  constructor(paymentDetails) {
    this.salary = paymentDetails.salary;
  }

  sendPayment() {
    return (this.salary / 12).toFixed(2);
  }
}

class HourlyStrategy {
  constructor(paymentDetails) {
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numberHours = paymentDetails.numberHours;
  }

  sendPayment() {
    return (this.hourlyRate * this.numberHours).toFixed(2);
  }
}

class Employee {
  constructor(employeeDetails, paymentDetails) {
    this.name = employeeDetails.name;
    this.salary = paymentDetails.salary;
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numberHours = paymentDetails.numberHours;
    this.paymentDetails = paymentDetails;
  }

  sendPayment(paymentStrategy) {
    const strategy = new paymentStrategy(this.paymentDetails);
    const paymentAmount = strategy.sendPayment();

    console.log(`Sending $${paymentAmount} to ${this.name}`);
  }
}

const bob = new Employee({ name: "Bob" }, { hourlyRate: 35, numberHours: 30 });
const jennifer = new Employee({ name: "Jennifer" }, { salary: 135000 });

bob.sendPayment(HourlyStrategy);
jennifer.sendPayment(SalaryStrategy);

let hourly = new HourlyStrategy({ hourlyRate: 35, numberHours: 30 });
console.log(hourly.sendPayment());

// class Employee {
//     constructor(employeeDetails, paymentDetails) {
//       this.name = employeeDetails.name;
//       this.salary = paymentDetails.salary;
//       this.hourlyRate = paymentDetails.hourlyRate;
//       this.numberHours = paymentDetails.numberHours;
//       this.paymentDetails = paymentDetails;
//     }

//     sendPayment() {
//       if (this.salary) {
//         var strategy = new SalaryStrategy(this.paymentDetails);
//       } else {
//         var strategy = new HourlyStrategy(this.paymentDetails);
//       }
//       const paymentAmount = strategy.sendPayment();

//       console.log(`Sending $${paymentAmount} to ${this.name}`);
//     }
//   }

//   const bob = new Employee({ name: "Bob" }, { hourlyRate: 35, numberHours: 30 });
//   const jennifer = new Employee({ name: "Jennifer" }, { salary: 135000 });

//   bob.sendPayment();
//   jennifer.sendPayment();
