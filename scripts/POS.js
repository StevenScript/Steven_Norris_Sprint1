document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Load cart from localStorage
  loadCart();

  // Select all add-to-cart buttons and attach event listeners
  const addButtons = document.querySelectorAll(".menuitembox .addbutton");
  console.log("Add buttons found:", addButtons.length);

  addButtons.forEach((button) => {
    console.log("Attaching event listener to:", button);
    button.addEventListener("click", () => {
      console.log("Add button clicked");
      const menuItem = button.closest(".menuitembox");
      const id = parseInt(menuItem.dataset.id);
      const name = menuItem.dataset.name;
      const price = parseFloat(menuItem.dataset.price);
      console.log(`Adding to cart: ${name} - $${price}`);
      addToCart(id, name, price);
    });
  });
});

let cart = [];

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCart();
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, name, price) {
  console.log("addToCart called with:", { id, name, price });
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  saveCart();
  updateCart();
}

function removeFromCart(id) {
  console.log("removeFromCart called with:", { id });
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCart();
}

function changeQuantity(id, quantity) {
  console.log("changeQuantity called with:", { id, quantity });
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      updateCart();
    }
  }
}

function updateCart() {
  console.log("updateCart called");
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} x ${
      item.quantity
    } = $${itemTotal.toFixed(2)}</span>
            <button onclick="changeQuantity(${item.id}, ${
      item.quantity - 1
    })">-</button>
            <button onclick="changeQuantity(${item.id}, ${
      item.quantity + 1
    })">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartContainer.appendChild(cartItem);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}
