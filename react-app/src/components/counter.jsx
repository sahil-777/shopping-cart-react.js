import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 22,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary m-2">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
