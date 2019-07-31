import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Hello from React!</h1>
      </Fragment>
    );
  }
}

export default App;
