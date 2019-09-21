import * as React from 'react';

interface ITodoProps {
  title: string
}

class Todo extends React.PureComponent<ITodoProps> {
  render() {
    const { title } = this.props;

    return <li>{title}</li>
  }
}

export default Todo;
