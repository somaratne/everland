import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/home-page/home-page.component";
import NavBar from "./components/navbar/navbar.component";
import Products from "./pages/products/products.component";
import NotFound from "./components/not-found/not-found.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDoc } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user-reducer/user-action";
import { selectCurrentUser } from "./redux/user-reducer/user-selectors";
import CheckOut from "./pages/checkout/checkout.component";
import "./App.css";

class App extends React.Component {
  unSubscribeUserAuth = () => {
    return null;
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeUserAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      } else {
        const userRef = await createUserProfileDoc(userAuth);
        await userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeUserAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/products" component={Products} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={HomePage} />
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <Route path="/signin" component={SignInAndSignUp} />
          )}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
