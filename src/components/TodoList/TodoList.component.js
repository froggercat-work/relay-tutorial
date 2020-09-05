import React from 'react';
import Todo from '../Todo';
import {
    RelayEnvironmentProvider
} from 'react-relay/hooks';
import RelayEnvironment from '../../RelayEnvironment';

const { Suspense } = React;

export default class TodoList extends React.Component {
    render() {
        console.log(this)
        const todos = this.props.viewer.todo_app_todos_connection.edges
            .map(({ node }) => node);
        return (
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={'Loading...'}>
                    <div class="bg-palette1-xiketic h-screen">
                        <div class="p-4">
                            {todos.map( todo =>
                                <Todo key={todo.__id} todo={todo} />
                            )}
                        </div>
                    </div>
                </Suspense>
            </RelayEnvironmentProvider>
        );
    }
}