import React from 'react';
import MaterialAvatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

export function Avatar({ name, image, variant }) {
  return <MaterialAvatar variant={variant} alt={name} src={image} />;
}

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
};
