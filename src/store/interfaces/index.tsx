export interface IStore {
  todos: ITodosStore;
}

export interface ITodosStore {
  todos: Array<ITodo>;
  addTodo: (todo?: ITodo) => void
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isDone: Boolean;
}