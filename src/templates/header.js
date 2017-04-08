import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

const date = new Date().toLocaleDateString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

const user = {
  firstName: 'John',
  lastName: 'Papada',
  userTime: date
}


// const user = undefined; --> for testing the else

function formatName(user) {
  return user.firstName + ' ' + user.lastName + ' today is ' + user.userTime;
};

function getGreeting(user) {
  if(user) {
    return  <h4>Hello {formatName(user)}, and welcome to the React Form</h4>          
  } else {
    return <h4>Hello Unlogged guy, and Welcome to the React Form</h4>     
  }
}


//  setInterval(ticTac, 1000);
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {getGreeting(user)}</h2> 
        </div>
        <p className="App-intro">
                        
        </p>
      </div>
    );
  }
}

export default Header;
