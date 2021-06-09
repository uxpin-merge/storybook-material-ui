import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';

export const Checkbox = ({ color, type, disabled, ...props }) => {
  let currentColor = color;
  if (disabled || color === 'null')  {
    currentColor = null;
  }

  return (
    <MaterialCheckbox
      style={{ color: currentColor }}
      color={type}
      disabled={disabled}
      {...props}
    />
  );
};

Checkbox.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  color: null,
  size: 'medium',
  type: 'primary',
  disabled: false,
};
