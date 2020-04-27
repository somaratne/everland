import React from "react";
import "./dropdown-item.styles.scss";

const DropDownItem = ({ imageUrl, name, price, quantity }) => {
  return (
    <div className="dropdown-item">
      <div className="row">
        <div className="col-1-4">
          <div className="col-1-4-img">
            <img className="col-1-4-img-img" src={imageUrl} alt={name} />
          </div>
        </div>
        <div className="col-1-4">
          <div>{name}</div>
        </div>
        <div className="col-1-4">
          <div>{price}</div>
        </div>
        <div className="col-1-4">
          <div>{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownItem;
