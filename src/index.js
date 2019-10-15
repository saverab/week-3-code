import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  name: {
    content: (name, changeName) => (
      <p>
        Greetings, traveler! What is your name?
        <br />
        <input type="text" value={name} onChange={changeName} />
      </p>
    ),
    buttons: [{ label: "Continue...", page: "start" }]
  },
  start: {
    content: (name, changeName) => (
      <p>Welcome, {name}! How would you like to get to your destination?</p>
    ),
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    content: () => (
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
      </p>
    ),
    buttons: [{ label: "12E", page: "death" }, { label: "97C", page: "life" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "name"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var buttons = pageData.buttons.map(buttonData => (
      <button onClick={() => this.goToPage(buttonData.page)}>
        {buttonData.label}
      </button>
    ));

    return (
      <div className="App">
        {pageData.content(this.state.name, event =>
          this.setState({ name: event.target.value })
        )}
        {buttons}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
