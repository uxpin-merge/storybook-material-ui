import React from 'react';

import { Stepper } from './Stepper';

export default {
  title: 'MaterialUI/Stepper',
  component: Stepper,
};

export const Primary = {
  args: {
    activeStep: 0,
    steps: ['Step 1', 'Step 2', 'Step 3'],
    orientation: 'horizontal'
  }
}