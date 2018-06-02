import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  palindromeCheck(str) {
    let strReversed = str
      .split("")
      .reverse()
      .join("");

    console.log(str);
    console.log(strReversed);
    if (str === strReversed) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          onChange={e => this.setState({ userInput: e.target.value })}
          className="inputLine"
        />
        <button
          className="confirmationButton"
          onClick={() => this.palindromeCheck(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}
