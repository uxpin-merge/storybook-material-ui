import React from 'react';

import { Icon } from './Icon';

export default {
  title: 'MaterialUI/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
