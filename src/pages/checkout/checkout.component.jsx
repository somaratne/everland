import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectToggleCart,
} from "../../redux/cart-reducer/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import {
  showCart,
  increaseCartItem,
  decreaseCartItem,
} from "./../../redux/cart-reducer/cart-action";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckOut = ({
  cartItems,
  location,
  showCart,
  toggleCart,
  increaseCartItem,
  decreaseCartItem,
}) => {
  const setCartToggle = location.pathname === "/checkout" ? false : toggleCart;
  showCart(setCartToggle);
  const totalPrice = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((acc, c) => acc + c, 0);
  return (
    <div className="checkout">
      <h2 className="checkout-header">CHECK OUT</h2>
      <div className="checkout-row">
        <div className="col-1-5">dfadfadf</div>
        <div className="col-1-5">PRODUCT</div>
        <div className="col-1-5">QUANTITY</div>
        <div className="col-1-5">PRICE</div>
        <div className="col-1-5">COST</div>
      </div>

      {cartItems.map((item) => (
        <CheckOutItem
          key={item.id}
          item={item}
          increaseQuantity={() => increaseCartItem(item)}
          decreaseQuantity={() => decreaseCartItem(item)}
        />
      ))}
      <div className="checkout-row">
        {cartItems.length !== 0 ? (
          <h3 className="checkout-total">Total Price : ${totalPrice}</h3>
        ) : null}
        <StripeCheckoutButton price={totalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    toggleCart: selectToggleCart(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCart: (cart) => dispatch(showCart(cart)),
    increaseCartItem: (item) => dispatch(increaseCartItem(item)),
    decreaseCartItem: (item) => dispatch(decreaseCartItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
