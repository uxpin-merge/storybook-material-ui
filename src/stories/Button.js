import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';

export const Button = ({ backgroundColor, label, type, ...props }) => {
  return (
    <MaterialButton
      style={{ backgroundColor }}
      color={type}
      {...props}
    >
      {label}
    </MaterialButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  label2: PropTypes.number,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  label: 'Hello world',
  label2: PropTypes.number,
  size: 'medium',
  variant: 'contained',
  type: 'primary',
  disabled: false,
};
