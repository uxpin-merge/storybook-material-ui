import React from 'react';

import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'MaterialUI/AvatarGroup',
  component: AvatarGroup,
};

export const Primary = {
  args: {
    avatars: [
      {
        image: 'https://uxpin.s3.amazonaws.com/faces/44.png',
        name: 'Remy Sharp',
      },
      {
        image: '',
        name: 'John Doe',
      },
    ],
    spacing: 'small',
  },
};
