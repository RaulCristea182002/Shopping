const form = document.querySelector('form');
const itemList = document.querySelector('#list');
const totalDisplay = document.querySelector('#total');
let total = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemInput = document.querySelector('#item');
  const quantityInput = document.querySelector('#quantity');
  const priceInput = document.querySelector('#price');
  const item = itemInput.value;
  const quantity = parseInt(quantityInput.value);
  const price = parseFloat(priceInput.value);
  const cost = quantity * price;
  addItemToDisplay(item, quantity, price, cost);
  updateTotal(cost);
  itemInput.value = '';
  quantityInput.value = '';
  priceInput.value = '';
});

function addItemToDisplay(item, quantity, price, cost) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `<span>${quantity} x ${item} - ${price.toFixed(2)} lei/buc. = ${cost.toFixed(2)} lei</span><button class="delete">Șterge</button>`;
  itemList.appendChild(li);
  const deleteButton = li.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    const toRemove = li.querySelector('span').textContent;
    const removedCost = parseFloat(toRemove.split('=')[1]);
    li.remove();
    updateTotal(-removedCost);
  });
}

function updateTotal(cost) {
  total += cost;
  totalDisplay.textContent = `Total: ${total.toFixed(2)} lei`;
}
