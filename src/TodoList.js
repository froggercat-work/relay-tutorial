import React from 'react';
import Todo from './Todo';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import {
    RelayEnvironmentProvider,
  } from 'react-relay/hooks';
  import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

class TodoList extends React.Component {
    render() {
        console.log(this)
        return (
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={'Loading...'}>
                    <div>
                        <div>
                            {this.props.viewer.todo_app_todos_connection.edges.map(({ node }) =>
                                <Todo key={node.__id} todo={node} />
                            )}
                        </div>
                    </div>
                </Suspense>
            </RelayEnvironmentProvider>
        );
    }
}

export default createFragmentContainer(
    TodoList,
    {
        viewer: graphql`
            fragment TodoList_viewer on query_root {
                todo_app_todos_connection(last: 100, order_by: {id: desc}) @connection(
                    key: "TodoList_todo_app_todos_connection", 
                    filters: []
                ) {
                    edges {
                        node {
                            ...Todo_todo
                        }
                    }
                }
            }
        `
    }
);