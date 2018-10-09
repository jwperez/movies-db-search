import React, { Component } from "react";
import Header from "./components/Header.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <input className="search" placeholder="Enter search term" />

        {/* {this.state.rows} */}
      </div>
    );
  }
}

export default App;