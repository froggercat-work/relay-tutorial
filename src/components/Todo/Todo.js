import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import Todo from './Todo.component';

export default createFragmentContainer(
    Todo,
    {
        todo: graphql`
            fragment Todo_todo on todo_app_todos {
                id,
                complete,
                text,
                user {
                    name
                }
            }
        `
    }
);