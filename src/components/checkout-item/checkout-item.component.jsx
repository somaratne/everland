import React from "react";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ item, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="checkout-item-row">
      <div className="col-1-5">
        <img className="img" src={item.imageUrl} alt={item.name} />
      </div>
      <div className="col-1-5">{item.name}</div>
      <div className="col-1-5">
        <span onClick={decreaseQuantity} style={{ cursor: "pointer" }}>
          &#10094;
        </span>{" "}
        {item.quantity}{" "}
        <span onClick={increaseQuantity} style={{ cursor: "pointer" }}>
          &#10095;
        </span>
      </div>
      <div className="col-1-5">{item.price}</div>
      <div className="col-1-5">{item.quantity * item.price}</div>
    </div>
  );
};

export default CheckOutItem;
