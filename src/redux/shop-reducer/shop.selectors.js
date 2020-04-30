import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.SHOP_DATA
);

export const shopDataForCollectionPreview = createSelector(
  [selectShopData],
  (SHOP_DATA) => Object.keys(SHOP_DATA).map((key) => SHOP_DATA[key])
);
