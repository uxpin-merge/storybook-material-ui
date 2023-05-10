import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@mui/material/Button';

export const Button = ({ label, color, ...props }) => {
  return (
    <MaterialButton
      {...props}
      color={color}
    >
      {label}
    </MaterialButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
};
