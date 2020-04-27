import { addItems } from "./../../utils/addCartItems";
import increaseItem from "../../utils/increaseCartItems";
import decreaseItem from "../../utils/decreaseCartItems";

const INITIAL_STATE = {
  cartItems: [],
  toggleCart: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART_ITEMS":
      return {
        ...state,
        cartItems: addItems(state.cartItems, action.payload),
      };
    case "TOGGLE_CART":
      return {
        ...state,
        toggleCart: action.payload,
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        cartItems: increaseItem(state.cartItems, action.payload),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
