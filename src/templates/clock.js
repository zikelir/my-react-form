import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function clock() {
    return new Date().toLocaleDateString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    setInterval(clock, 1000);
}

class Tick extends Component {
    render() {
        return(
            <div className="clock">
                It is {clock()}
            </div>
        );
    }
}



ReactDOM.render(
    <Tick />,
    document.getElementById('root')
);


export default Tick;