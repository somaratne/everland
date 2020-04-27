import React from "react";
import "./product-item.styles.scss";

const ProductItem = ({ imageUrl, name, price, onClick }) => {
  return (
    <div className="product-item">
      <div className="product-item-img">
        <img className="product-item-img-img" src={imageUrl} alt={name} />
      </div>
      <div className="product-item-detail">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <button className="product-item-btn" onClick={onClick} type="submit">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItem;
