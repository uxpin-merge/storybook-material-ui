import React from 'react';

import { Accordion } from './Accordion';

export default {
  title: 'MaterialUI/Accordion',
  component: Accordion,
};

export const Primary = {
  args: {
    data: [{
      title: 'General settings',
      description: 'I am an accordion',
      text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
        'maximus est, id dignissim quam.'
    }, {
      title: 'Advanced settings',
      description: 'I am an accordion2',
      text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
        'maximus est, id dignissim quam.'
    },  {
      title: 'Advanced settings2',
      disabled: true,
      description: 'I am an accordion2',
      text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
        'maximus est, id dignissim quam.'
    }],
  }
}
