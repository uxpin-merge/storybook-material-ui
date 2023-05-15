import React from 'react';

import { RadioGroup } from './RadioGroup';

export default {
  title: 'MaterialUI/RadioGroup',
  component: RadioGroup,
};

export const Primary = {
  args: {
    items: [
      { value: 'option_1', label: 'OPTION 1' },
      { value: 'option_2', label: 'OPTION 2' },
      { value: 'other', label: 'Other' },
    ],
    defaultValue: 'option_2',
    formLabel: 'Options',
  },
};
