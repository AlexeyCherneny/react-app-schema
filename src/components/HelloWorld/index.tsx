import * as React from 'react';

class HelloWorld extends React.Component {
  handleButton() {
    debugger
    alert('Hello world!')
  }

  render() {
    return <button onClick={this.handleButton}>Click me</button>
  }
}

export default HelloWorld;
