import * as React from 'react';

import { Todos } from 'components';
import store from './store';

class App extends React.Component {
  render() {
    const { todos: todosStore } = store;

    return <Todos todosStore={todosStore} />;
  }
}

export default App;
