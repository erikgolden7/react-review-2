import React, { Component } from "react";
import CardList from "./components/CardList";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CardList />
      </div>
    );
  }
}

export default App;
