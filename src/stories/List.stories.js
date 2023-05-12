import React from 'react';
import { List } from './List';

export default {
  title: 'MaterialUI/List',
  component: List,
};

export const Primary = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
    disabled: false,
    divider: false,
  },
};
