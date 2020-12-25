import './App.css';


import React, { Component } from "react";
import { render, unmountComponentAtNode } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("steps challenge 1:", position.coords.latitude*100);
      console.log("step challenge 2", position.coords.longitude*100);
    });
  }

  render() {
    return (
      <div>
        <h4></h4>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
