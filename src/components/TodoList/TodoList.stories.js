import React from 'react';
import TodoList from './TodoList.component';

export default {
    component: TodoList,
    title: 'TodoList'
}

const Template = args => <TodoList {...args} />;

export const SingleTodo = Template.bind({});
SingleTodo.args = {
    viewer: {
        todo_app_todos_connection: {
            edges: [
                {
                    node: {
                        complete: false,
                        text: "Basic Task",
                        user: {
                            name: "Sondra"
                        }
                    }
                }
            ]
        }
    }
};

export const AFewTodos = Template.bind({});
AFewTodos.args = {
    ...SingleTodo.args,
    ...{
        viewer: {
            todo_app_todos_connection: {
                edges: Array.from({length: 3}, (_, n) => {
                    return { 
                        node: {
                            complete: !!(n%2),
                            text: `Basic Task`,
                            user: {
                                name: "Sondra"
                            }
                        }
                    }
                })
            }
        }
    }
}

export const ManyTodos = Template.bind({});
ManyTodos.args = {
    ...SingleTodo.args,
    ...{
        viewer: {
            todo_app_todos_connection: {
                edges: Array.from({length: 15}, (_, n) => {
                    return { 
                        node: {
                            complete: !!(n%2),
                            text: `Basic Task`,
                            user: {
                                name: "Sondra"
                            }
                        }
                    }
                })
            }
        }
    }
}