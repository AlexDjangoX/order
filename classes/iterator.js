const items = [1, "string", false, 3.23];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);

while (iter.hasNext()) {
  console.log(iter.next());
}
