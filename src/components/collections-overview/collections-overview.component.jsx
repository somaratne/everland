import React from "react";
import { connect } from "react-redux";
import ProductItem from "./../product-item/product-item.component";
import { shopDataForCollectionPreview } from "../../redux/shop-reducer/shop.selectors";
import { selectCartItems } from "./../../redux/cart-reducer/cart.selectors";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ SHOP_DATA, addCartItems }) => {
  return (
    <div className="collection-overview">
      {SHOP_DATA.map((data) => (
        <div className="row" key={data.id}>
          <h2 className="products-heading">{data.title}</h2>
          {data.items.map((item, idx) =>
            idx <= 3 ? (
              <div key={item.id} className="col-1-4">
                <ProductItem
                  onClick={() => addCartItems(item)}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SHOP_DATA: shopDataForCollectionPreview(state),
    addCartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
