import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Form from './form.js';
import Hello from './hello.js';




class Father extends Component {
    render() {
        return (
            <div> 
                <Header /><Form /><Hello />
            </div>
        ); 
    }
} 

export default Father;