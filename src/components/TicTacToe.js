import React, { Component } from "react";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.genBoard = this.genBoard.bind(this);
  }

  render() {
    return (
      <div>
        {this.genBoard(5)}
      </div>
    );
  }

  genBoard(size) {
    return (
      <p>Hi {size}</p>
    );
  }
};

export default TicTacToe;
