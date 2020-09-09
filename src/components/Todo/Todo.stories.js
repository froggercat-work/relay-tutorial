import React from 'react';
import Todo from './Todo.component';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment } from 'relay-test-utils';


export default {
    component: Todo,
    title: 'Todo'
}

// Since we have nested fragments we need a relay env to propogate data to children
// (Todo includes child Checkbox)
const Template = args =>
    <RelayEnvironmentProvider environment={createMockEnvironment()}>
        <Todo {...args} />
    </RelayEnvironmentProvider>;

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