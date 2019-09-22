import { action, observable } from 'mobx';

import { ITodo, ITodosStore } from 'interfaces';

const createId = () => `_${Math.random().toString(36).substr(2, 9)}`;

class Todos implements ITodosStore {
  @observable todos: Array<ITodo> = [];

  createTodo = (title?: string, description?: string, isDone?: boolean): ITodo => ({
    id: createId(),
    title: title ? title : '',
    description: description ? description : '',
    isDone: isDone ? isDone : false,
  })

  @action addTodo = (todo?: ITodo) => {
    if (!todo) {
      this.todos.push(this.createTodo());
    } else {
      this.todos.push(todo);
    }
  }
}

export default Todos;
