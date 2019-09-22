import * as React from 'react';
import { observer } from 'mobx-react';

import { Button } from 'ui';
import { ITodosProps } from './interface';

@observer
class Todos extends React.PureComponent<ITodosProps> {
  addTodo = () => {
    this.props.todosStore.addTodo()
  }

  render() {
    const { todosStore } = this.props;
    
    return (
      <div>
        {todosStore.todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))}
        <Button onClick={this.addTodo}>Add todo</Button>
      </div>
    )
  }
}

export default Todos;
