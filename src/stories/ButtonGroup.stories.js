import React from 'react';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'MaterialUI/ButtonGroup',
  component: ButtonGroup,
};

export const Primary = {
  args: {
    buttons: [{ label: 'one' }, { label: 'two' }, { label: 'three' }],
    size: 'medium',
    variant: 'contained',
    color: 'primary',
    disabled: false,
    orientation: 'horizontal',
    fullWidth: false,
  },
};
