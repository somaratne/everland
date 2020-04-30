import React from "react";
import { Switch, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";
import "./products.styles.scss";

const Products = ({ match }) => {
  return (
    <div className="products">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={Collection}
        />
      </Switch>
    </div>
  );
};

export default Products;
