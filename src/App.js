import React, { Component } from 'react';
import './App.css';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
}
  render() {
    return (
      <div className="App">
        <div className="header">Simple Survey</div>
        <Page />
      </div>
    );
  }
}

export default App;
