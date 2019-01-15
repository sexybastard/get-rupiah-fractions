import React, { Component } from 'react';
import { validate, getAmount, calculate } from '../utils';
import './InputNumber.css'

class InputNumber extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      amount: ''
    };
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let validateResponse = validate(this.state.amount)
      if(validateResponse.isValid){
        this.props.setResult(calculate(getAmount(this.state.amount)), validateResponse)
      }
      else{
        this.props.setResult('', validateResponse)
      }
    }
  };

  handleChange = (e) => {
    this.setState({ amount: e.target.value })
  };

  render() {
    return (
      <div id="input-container" className="input-container">
        <input className="input-amount" placeholder="Input amount..." type="text" value={this.state.amount} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default InputNumber;
