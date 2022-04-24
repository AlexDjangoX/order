let state = {
  messages: [{ text: "", priority: true, archived: false }],
  inputString: "",
};

const list = document.querySelector(".list");
const listItems = list.querySelectorAll(":scope > .listItem");

const form = document.querySelector(".form");
const input = document.querySelector(".textInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  state.messages.length < 5 && state.inputString !== ""
    ? validEntry()
    : renderError();
});

input.addEventListener("input", (event) => {
  state.inputString = event.target.value;
});

function validEntry() {
  let entryObject = { text: "", priority: true, archived: false };
  entryObject.text = state.inputString;

  state.messages.push(entryObject);

  console.log("entryObject...", entryObject);
  console.log(entryObject.priority);
  isPriority(entryObject);

  form.reset();
  state.inputString = "";

  renderList();
}

function isPriority(object) {
  console.log(object.priority);
  console.log(listItems);
  object.priority
    ? (listItems.style.color = "red")
    : (listItems.style.color = "red");
}

function renderList() {
  list.innerHTML = "";

  state.messages.forEach((message) => {
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "listItem");
    listItem.innerText = message.text;
    list.append(listItem);
  });
}

function renderError() {
  console.log("enter valid data");
}
