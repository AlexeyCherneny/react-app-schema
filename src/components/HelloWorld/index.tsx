import * as React from 'react';

import * as styles from './styles.scss';

class HelloWorld extends React.Component {
  handleButton() {
    alert('Hello big world!')
  }

  render() {
    return <button onClick={this.handleButton} className={styles.block}>Click me</button>
  }
}

export default HelloWorld;
