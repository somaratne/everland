import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { selectCartItems } from "./../../redux/cart-reducer/cart.selectors";
import "./shopping-cart.styles.scss";

const ShoppingCart = ({ onClick, cartItems }) => {
  const totalItems = cartItems
    .map((item) => item.quantity)
    .reduce((acc, c) => acc + c, 0);
  return (
    <div className="shopping-cart" onClick={onClick}>
      <Cart />
      <span className="shopping-cart-counter">{totalItems}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(ShoppingCart);
