import React from 'react';
import Todo from '../Todo';
import {
    RelayEnvironmentProvider
} from 'react-relay/hooks';
import RelayEnvironment from '../../env/RelayEnvironment';

const { Suspense } = React;

export default class TodoList extends React.Component {
    render() {
        const {viewer:{todo_app_todos_connection:{edges:[...todos]}}} = this.props
        return (
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={'Loading...'}>
                    <div className="bg-palette1-xiketic h-screen overflow-y-scroll">
                        <div className="p-4">
                            {todos.map( ({node}) =>
                                <Todo key={node.__id} todo={node} />
                            )}
                        </div>
                    </div>
                </Suspense>
            </RelayEnvironmentProvider>
        );
    }
}