import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'MaterialUI/Tabs',
  component: Tabs,
};

export const Primary = {
  args: {
    centered: true,
    indicatorColor: 'primary',
    textColor: 'primary',
    tabs: ['Item One', 'Item Two', 'Item Three'],
    orientation: 'horizontal',
    variant: 'fillWidth',
  },
};
