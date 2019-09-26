import todosStore from './todos';

import { IStore } from 'interfaces';

class Store implements IStore {
  todos = new todosStore();
}

const store = new Store();

export default store;
