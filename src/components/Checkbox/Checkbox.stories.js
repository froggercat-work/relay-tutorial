import React from 'react';
import Checkbox from './Checkbox.component';

export default {
    component: Checkbox,
    title: 'Checkbox'
}

const Template = args => <Checkbox {...args} />;

export const Incomplete = Template.bind({});
Incomplete.args = {
    todo: {
        complete: false
    }
};

export const Complete = Template.bind({});
Complete.args = {
    todo: {
        complete: true
    }
}