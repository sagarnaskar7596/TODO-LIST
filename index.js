let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("Input")
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div")
    container.style.marginBottom = "10px"
    
    const text = document.createElement("p")
    text.style.display = "inline"
    text.style.marginLeft = "10px"
    text.style.marginRight = "10px"
    text.textContent = item;

    const button = document.createElement("button")
    button.textContent = "Delete"
    button.style.marginLeft="10px"
    button.onclick = () => removeItem(idx)

    container.appendChild(text)
    container.appendChild(button)

    itemsDiv.appendChild(container)
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey)
  if (oldItems) items = JSON.parse(oldItems)
    renderItems()
  
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems)
}

function addItems() {
  const value = input.value;
  if (!value) {
    alert("Please enter a value")
    return
  }
  items.push(value)
  renderItems()
  input.value = ""
  saveItems()
}

function removeItem(idx) {
  items.splice(idx, 1)
  renderItems()
  saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)
