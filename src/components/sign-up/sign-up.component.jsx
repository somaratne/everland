import React from "react";
import Input from "../input/input.component";
import { createUserProfileDoc, auth } from "./../../firebase/firebase.util";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        displayName: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, repeatPassword } = this.state.data;
    if (password !== repeatPassword) return;
    else {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      try {
        await createUserProfileDoc(user, { displayName });
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { displayName, email, password, repeatPassword } = this.state.data;
    return (
      <div className="sign-up">
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            label="Name"
            value={displayName}
            onChange={this.handleChange}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="repeatPassword"
            label="Repeat Password"
            value={repeatPassword}
            onChange={this.handleChange}
          />
          <button className="sign-up-btn" submit="submit">
            SIGN UP
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
