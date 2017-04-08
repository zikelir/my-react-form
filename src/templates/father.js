import React, { Component } from 'react';
import Header from './header.js';
import Form from './form.js';

class Father extends Component {
    render() {
        return (
            <div>
                <Header /><Form />           
            </div>
        ); 
    }
} 

export default Father;