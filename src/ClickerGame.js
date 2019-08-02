import React, { Component } from "react";
import "./ClickerGame.css";

class ClickerGame extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    let newNum = Math.floor(Math.random() * 10);
    this.setState({ num: newNum });
  }

  render() {
    return (
      <div className="ClickerGame">
        <h2>Number is {this.state.num}</h2>
        {this.state.num === 7 ? (
          <h2 className="win">You Win!!!</h2>
        ) : (
          <button onClick={this.randNum}>Random Number</button>
        )}
      </div>
    );
  }
}

export default ClickerGame;
