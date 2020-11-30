import React from 'react';

import { TextInput } from '../lib';

export default {
  title: 'Example/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  type:'text'
};


export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type:'password'
};

export const Email = Template.bind({});
Email.args = {
  size: 'large',
  label: 'E-mail',
  type:'email'
};

export const Number = Template.bind({});
Number.args = {
  size: 'small',
  label: 'Number',
  type:'number'
};
