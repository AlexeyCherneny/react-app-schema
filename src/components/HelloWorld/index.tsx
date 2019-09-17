import * as React from 'react';

class HelloWorld extends React.Component {
  handleButton() {
    alert('Hello big world!')
  }

  render() {
    return <button onClick={this.handleButton}>Click me</button>
  }
}

export default HelloWorld;
