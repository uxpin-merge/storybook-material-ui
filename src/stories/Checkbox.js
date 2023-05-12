import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@mui/material/Checkbox';

export const Checkbox = ({ color, disabled, ...props }) => {
  return (
    <MaterialCheckbox
      {...props}
      color={color}
      disabled={disabled}
    />
  );
};

Checkbox.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
};
