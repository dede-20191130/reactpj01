import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
  shoot = function(e) {
    alert(e.target.dataset.demo);
    console.log(e.target);
    /*
    The 'this' keyword refers to the component object
    */
  }
  render() {
    return (
      <button onClick={this.shoot} data-demo="demodemo">Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
