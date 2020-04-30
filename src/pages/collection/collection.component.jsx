import React from "react";
import { connect } from "react-redux";
import { selectShopData } from "./../../redux/shop-reducer/shop.selectors";
import "./collection.styles.scss";
import ProductItem from "../../components/product-item/product-item.component";

const Collection = ({ match, SHOP_DATA }) => {
  const itemList = SHOP_DATA[match.params.collectionId];
  const { title, items } = itemList;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(({ id, name, imageUrl, price }) => (
          <ProductItem key={id} name={name} imageUrl={imageUrl} price={price} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SHOP_DATA: selectShopData(state),
  };
};

export default connect(mapStateToProps)(Collection);
