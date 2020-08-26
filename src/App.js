import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';

const AppAllTodosQuery = graphql`
  query AppAllTodosQuery {
    ...TodoList_viewer
  }
`


function App(props) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={AppAllTodosQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <TodoList viewer={props} />
        }
        return <div>Loading</div>
      }}
    />
  );
}

export default App;