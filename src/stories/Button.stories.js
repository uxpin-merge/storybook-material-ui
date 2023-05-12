import React from 'react';

import { Button } from './Button';

export default {
  title: 'MaterialUI/Button',
  component: Button,
};

export const Primary = {
  args: {
    label: 'Hello world',
    size: 'medium',
    variant: 'contained',
    color: 'primary',
    disabled: false,
  }
}
