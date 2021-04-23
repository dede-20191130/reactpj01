import React from 'react';
import ReactDOM from 'react-dom';

// const spanStyle = {
//   color: 'blue',
// };

function myColorStyle(mycolor) {
  return {
    color: mycolor,
  }
}

class Car extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <h2>I am a <span style={myColorStyle(this.props.color)}>{this.props.color}</span> Car!</h2>;
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));
