import React, { Component } from "react";
import "../index.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { user: false, button: true };
  }

  greeting = () => {
    console.log(this.state.user);
    const { user } = this.state;
    if (user) {
      return <h1 className="nav-item">Welcome back!</h1>;
    }
    return <h1 className="nav-item">Please sign in → </h1>;
  };

  handleClick = () => {
    this.setState({ user: !this.state.user, button: !this.state.button });
  };

  render() {
    return (
      <div>
        <div className="nav">
          {this.greeting()}
          <input
            type="button"
            className="button"
            value={this.state.button === true ? "Sign In" : "Sign Out"}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
