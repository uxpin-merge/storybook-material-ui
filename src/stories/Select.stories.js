import React from 'react';
import { Select } from './Select';

export default {
  title: 'MaterialUI/Select',
  component: Select,
};

export const Primary = {
  args: {
    inputLabel: 'Age',
    options: [{
      label: 'Ten',
      value: 10,
    },{
      label: 'Twenty',
      value: 20,

    },{
      label: 'Thirty',
      value: 30,
    }],
    variant: 'standard',
    fullWidth: true,
  }
}