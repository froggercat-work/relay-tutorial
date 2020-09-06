import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import TodoList from './TodoList.component';

export default createFragmentContainer(
    TodoList,
    {
        viewer: graphql`
            fragment TodoList_viewer on query_root {
                todo_app_todos_connection(last: 100, order_by: {todo_id: desc}) @connection(
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