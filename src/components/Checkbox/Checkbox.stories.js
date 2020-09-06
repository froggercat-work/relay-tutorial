import React from 'react';
import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'Checkbox'
}

const Template = args => <Checkbox {...args} />;

export const Incomplete = Template.bind({});
Incomplete.args = {
    complete: false
};

export const Complete = Template.bind({});
Complete.args = {
    complete: true
}