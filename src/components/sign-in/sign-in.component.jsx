import React from "react";
import Input from "./../input/input.component";
import { signInWithGoogle, auth } from "./../../firebase/firebase.util";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state.data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  render() {
    const { email, password } = this.state.data;
    return (
      <div className="sign-in">
        <h2 className="sign-in-header">If you already have an account</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            label="Email"
            onChange={this.handleChange}
            type="text"
            value={email}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            type="password"
            value={password}
          />
          <div className="sign-in-button">
            <button onClick={signInWithGoogle} className="sign-in-btn">
              SIGN IN WITH GOOGLE
            </button>
            <button className="sign-in-btn" type="submit">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
