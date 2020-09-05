import React from 'react';
import Todo from './Todo.component';

export default {
    component: Todo,
    title: 'Todo'
}

const Template = args => <Todo {...args} />;

export const Incomplete = Template.bind({});
Incomplete.args = {
    todo: {
        complete: false,
        text: "Test Task",
        user: {
            name: "User's Name"
        }
    }
};

export const Complete = Template.bind({});
Complete.args = {
    todo: {
        ...Incomplete.args.todo,
        complete: true
    }
}