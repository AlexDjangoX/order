// filewriter.js
class FileWriter {
  constructor() {}

  openFile(filePath) {
    this.filePath = filePath;
    // logic to open the desired file at filePath.fileExtension
  }
  addContentsToFile(contents) {
    // logic to write contents to opened file
  }
  saveFile() {
    // logic to close / save file
  }
}

module.exports = FileWriter;

// const FileWriter = require("./filewriter.js");

class BaseBankExporter {
  constructor(transactions) {
    this.transactions = transactions;
    // composition: BaseBankExporter HAS A FileWriter
    this.fileWriter = new FileWriter();
  }

  export(filePath) {}

  save(filePath, contents) {
    this.fileWriter.openFile(filePath);
    this.fileWriter.addContentsToFile(contents);
    this.fileWriter.saveFile();
  }
}
module.exports = BaseBankExporter;

// csvexporter.js
// const BaseBankExporter = require("./baseexporter.js");

// inheritance: CSVBankExporter IS A BaseBankExporter
class CSVBankExporter extends BaseBankExporter {
  export(filePath) {
    let contentsToSaveInFile = "";
    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      const transactionAsCSV = `${transaction.date},${transaction.amount}\n`;
      contentsToSaveInFile += transactionAsCSV;
    }
    console.log(contentsToSaveInFile);
    this.save(filePath, contentsToSaveInFile);
  }
}

module.exports = CSVBankExporter;

// htmlexporter.js
// const BaseBankExporter = require("./baseexporter.js");

class HTMLBankExporter extends BaseBankExporter {
  export(filePath) {
    let contentsToSaveInFile = "<table>\n";
    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      const transactionAsCSV = `<tr><td>${transaction.date}</td><td>${transaction.amount}</td></tr>\n`;
      contentsToSaveInFile += transactionAsCSV;
    }
    contentsToSaveInFile += "</table>";
    console.log(contentsToSaveInFile);
    this.save(filePath, contentsToSaveInFile);
  }
}

module.exports = HTMLBankExporter;

// index.js
// const BaseBankExporter = require("./baseexporter.js");
// const CSVBankExporter = require("./csvexporter.js");
// const HTMLBankExporter = require("./htmlexporter.js");

const transactions = [
  {
    amount: 100,
    date: "01/01/2022",
  },
  {
    amount: 80,
    date: "02/01/2022",
  },
];

const htmlExporter = new HTMLBankExporter(transactions);
htmlExporter.export("~/Desktop/test.html");

const csvExporter = new CSVBankExporter(transactions);
csvExporter.export("~/Desktop/test.csv");

// OUTPUT of index.js:

{
  /* <table>
  <tr>
    <td>01/01/2022</td>
    <td>100</td>
  </tr>
  <tr>
    <td>02/01/2022</td>
    <td>80</td>
  </tr>
</table>;
01 / 01 / 2022, 100;
02 / 01 / 2022, 80; */
}
