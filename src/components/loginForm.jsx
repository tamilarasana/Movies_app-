import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  // username = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
  };

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    console.log("Submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    // account.username = e.currentTarget.value;
    // account.password = e.currentTarget.value;
    account[input.name] = input.value;

    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.value}
            label="Username"
            onChange={this.handleChange}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
