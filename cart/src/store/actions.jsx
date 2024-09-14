export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

// Action to add product to cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

// Action to remove product from cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

// Action to update the quantity of a product in the cart
export const updateCart = (id, quantity) => ({
  type: UPDATE_CART,
  payload: { id, quantity }
});
