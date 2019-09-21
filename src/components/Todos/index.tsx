import * as React from 'react';

import { Todo } from 'components';

interface ITodosProps {
  todos: any;
}

class Todos extends React.PureComponent<ITodosProps> {
  render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.list.map(todo => <Todo key={todo.title} {...todo} />)}
      </div>
    )
  }
}

export default Todos;
