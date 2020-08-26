import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

// const TodoQuery = graphql`
// fragment Todo_todo on todo_app_todos {
//     id,
//     complete,
//     text,
//     user {
//         name
//     }
// }`

class Todo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.complete ? "✓" : "☐"} {this.props.todo.text} -- {this.props.todo.user.name}</p>
            </div>
        );
    }
}

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