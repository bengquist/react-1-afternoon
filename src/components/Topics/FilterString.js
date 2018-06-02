import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArr: ["Rick", "Bob", "Jonas"],
      userInput: "",
      filteredArr: []
    };
  }

  userInput(input) {
    let newArr = [];
    let currInput = this.state.unfilteredArr;

    for (let i = 0; i < currInput.length; i++) {
      if (currInput[i] === input) {
        newArr.push(currInput[i]);
      }
    }

    this.setState({ filteredArr: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Names: {JSON.stringify(this.state.unfilteredArr, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button
          className="confirmationButton"
          onClick={() => this.userInput(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Names: {JSON.stringify(
            this.state.filteredArr,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
