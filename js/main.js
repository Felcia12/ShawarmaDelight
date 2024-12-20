let cart = JSON.parse(localStorage.getItem("cart")) || []; 
// Retrieve the cart from localStorage or initialize an empty array if no cart exists.

const addToCart = (name, quantity, price, img) => {
  let itemInCart = false; 
  // Flag to track whether the item already exists in the cart.

  // Use map to iterate through the cart and check for existing items.
  cart = cart.map((item) => {
    if (item.name === name) { 
      // Check if the item name matches the one being added.
      
      if (item.quantity === quantity) {
        // If the quantity is the same, alert the user and set the flag.
        alert("Item already in cart");
        itemInCart = true;
      } else {
        // If the quantity is different, update the item's quantity and price.
        alert("Quantity updated for item in cart");
        return { ...item, quantity, price }; // Return the updated item.
      }
    }
    return item; 
    // Return the item unchanged if it doesn't match the one being added.
  });

  if (!itemInCart) { 
    // If the item is not already in the cart, add it as a new entry.
    cart.push({ name, quantity, price, img });
    alert("Item added to cart");
  }

  localStorage.setItem("cart", JSON.stringify(cart)); 
  // Save the updated cart to localStorage.
};
