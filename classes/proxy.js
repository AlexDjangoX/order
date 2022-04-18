class CryptoCurrencyAPI {
  getValue(coin) {
    console.log(`Calling External API for ${coin}`);
    switch (coin) {
      case "Bitcoin":
        return 4532;
      case "Ether":
        return 8976;
      case "Lite":
        return 9860;
      default:
        return `${coin} : No such coin`;
    }
  }
}

// const api = new CryptoCurrencyAPI();

// console.log(api.getValue("Ether"));

class CryptoCurrencyProxy {
  constructor() {
    this.api = new CryptoCurrencyAPI();
    this.cache = {};
  }

  getValue(coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
      return this.cache[coin];
    }

    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue("Lite"));
console.log(proxy.getValue("Ether"));
console.log(proxy.getValue("Lite"));
console.log(proxy.getValue("Lite"));
console.log(proxy.getValue("Ether"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Lite"));
