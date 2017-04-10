import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../App.css';
import Clock from './clock.js';

//  setInterval(ticTac, 1000);
class Form extends Component {
  render() {
    return (
      <div className="form">
        <Clock />
      </div>
    );
  }
}

export default Form;
