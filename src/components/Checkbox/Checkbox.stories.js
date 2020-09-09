import React from 'react';
import Checkbox from './Checkbox.component';
import { v4 as uuidv4 } from 'uuid';

export default {
    component: Checkbox,
    title: 'Checkbox'
}

const Template = args => <Checkbox {...args} />;

export const Incomplete = Template.bind({});
Incomplete.args = {
    todo: {
        todo_id: uuidv4(),
        complete: false
    }
};

export const Complete = Template.bind({});
Complete.args = {
    todo: {
        todo_id: uuidv4(),
        complete: true
    }
}