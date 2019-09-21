import * as React from 'react';
import { observable, computed } from 'mobx';

import Todos from './components/Todos';

class Todo {
  id = Math.random();
  @observable title = '';
}

class TodoList {
  @observable todos = [];

  @computed
    get list() {
      return this.todos
    }
}

const todos = new TodoList();

todos.todos.push({ title: 'Hello' })
todos.todos.push({ title: 'world' })

class App extends React.Component {
  render() {
    return <Todos todos={todos} />;
  }
}

export default App;
