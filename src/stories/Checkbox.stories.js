import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'MaterialUI/Checkbox',
  component: Checkbox,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
