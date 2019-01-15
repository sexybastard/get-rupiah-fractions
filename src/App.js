import React, { Component } from 'react';
import Header from './components/Header';
import InputNumber from './components/InputNumber';
import DisplayResult from './components/DisplayResult';
import './App.css'

const headerTitle = 'Get Rupiah Fractions'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      result: '',
      validateResponse: {}
    };
  }

  setResult = (result, validateResponse) => {
    this.setState({ result, validateResponse })
  }

  render() {
    const { result, validateResponse } = this.state

    return (
      <div id="main" className="main">
        <div id="container" className="container">
          <Header title={headerTitle} />
          <InputNumber setResult={this.setResult} />
          <DisplayResult result={result} validateResponse={validateResponse} />
        </div>
      </div>
    );
  }
}

export default App;
