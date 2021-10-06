import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 22,
  };

  handleIncrement = () => {
    this.setState({count:this.state.count+1});
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
