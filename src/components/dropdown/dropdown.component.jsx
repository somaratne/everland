import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DropDownItem from "../dropdown-item/dropdown-item.component";
import { selectCartItems } from "./../../redux/cart-reducer/cart.selectors";
import "./dropdown.styles.scss";

const DropDown = ({ cartItems }) => {
  return (
    <div className="drop-down">
      <div className="drop-down-cartitem">
        {cartItems ? (
          cartItems.map(({ id, imageUrl, name, price, quantity }) => (
            <DropDownItem
              key={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
              quantity={quantity}
            />
          ))
        ) : (
          <h2>There are no items to show</h2>
        )}
      </div>
      <Link to="/checkout">
        <button className="drop-down-btn" type="submit">
          GO TO CHECKOUT
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(DropDown);
