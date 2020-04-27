const addCartItems = (cartItem) => {
  return {
    type: "ADD_CART_ITEMS",
    payload: cartItem,
  };
};

export const showCart = (toggle) => {
  return {
    type: "TOGGLE_CART",
    payload: toggle,
  };
};

export const increaseCartItem = (cartItem) => {
  return {
    type: "INCREASE_ITEM",
    payload: cartItem,
  };
};

export const decreaseCartItem = (cartItem) => {
  return {
    type: "DECREASE_ITEM",
    payload: cartItem,
  };
};

export default addCartItems;
