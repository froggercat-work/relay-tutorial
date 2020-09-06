import React from 'react';
import TodoList from '../TodoList';
import { QueryRenderer, requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../../env/RelayEnvironment';
// import { ConnectionHandler } from 'relay-runtime';

const AppAllTodosQuery = graphql`
  query AppAllTodosQuery {
    ...TodoList_viewer
  }
`

class App extends React.Component {
  componentDidMount() {
    const subscriptionConfig = {
      // #1
      subscription: graphql`
        subscription Apptodo_app_todos_connectionSubscription {
          todo_app_todos_connection {
            edges {
              node {
                complete
                id
                text
              }
            }
          }
        }
      `,
      onCompleted: data => console.log("subscription data", data),
      onError: error => console.error("subscription error", error)
    }

    this.subscription = requestSubscription(RelayEnvironment, subscriptionConfig)
  }

  componentWillUnmount() {
    this.subscription.dispose()
  }

  render() {
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={AppAllTodosQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <TodoList viewer={props} />
          }
          return <div>Loading(queryRender)</div>
        }}
      />
    );
  }
}
export default App;