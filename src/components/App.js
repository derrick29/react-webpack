import React, { Component } from "react";
import $ from "jquery";
import "../../semantic/dist/semantic.min.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("App.js Mounted");
  }
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">
          <i className="code icon"></i> Welcome to React Webpack
        </h1>
      </div>
    );
  }
}

export default App;
