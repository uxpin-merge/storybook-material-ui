import React from 'react';
import { TextField } from './TextField';

export default {
  title: 'MaterialUI/TextField',
  component: TextField,
};

export const Primary = {
  args: {
    label: 'Standard',
    variant: 'standard',
    disabled: false,
    required: false,
    error: false,
    helperText: undefined,
    placeholder: 'write here!',
    color: 'primary',
  },
};
