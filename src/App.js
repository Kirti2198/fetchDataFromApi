
import React, { Component } from "react";
import './App.css';
import FetchRestaurent from './components/FetchRestaurent';

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchRestaurent />
      </div>
    );
  }
}

export default App;
