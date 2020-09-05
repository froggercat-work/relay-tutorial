import React from 'react';
import Todo from './Todo.component';

export default {
    component: Todo,
    title: 'Todo'
}

const Template = args => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
    todo: {
        complete: false,
        text: "Test Task",
        user: {
            name: "User's Name"
        }
    }
};

export const Checked = Template.bind({});
Checked.args = {
    todo: {
        ...Default.args.todo,
        complete: true
    }
}