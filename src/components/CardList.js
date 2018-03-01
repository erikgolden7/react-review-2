import React, { Component } from "react";
import CardItem from "./CardItem";
import axios from "axios";

export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      console.log(res.data.results);
      this.setState({ characters: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <h2 className="characters">Star Wars Characters</h2>
        <CardItem char={this.state.characters} />
      </div>
    );
  }
}
