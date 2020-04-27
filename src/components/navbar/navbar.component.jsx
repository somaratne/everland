import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import ShoppingCart from "../shopping-cart/shopping-cart.component";
import DropDown from "./../dropdown/dropdown.component";
import { showCart } from "./../../redux/cart-reducer/cart-action";
import { selectToggleCart } from "../../redux/cart-reducer/cart.selectors";
import { selectCurrentUser } from "./../../redux/user-reducer/user-selectors";
import "./navbar.styles.scss";

const NavBar = ({ currentUser, toggleCart, showCart }) => {
  return (
    <div className="nav-bar">
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        {currentUser ? (
          <div
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <ShoppingCart onClick={() => showCart(!toggleCart)} />
      </ul>
      {toggleCart ? <DropDown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    toggleCart: selectToggleCart(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCart: (cart) => dispatch(showCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
