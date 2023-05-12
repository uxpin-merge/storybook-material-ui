import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import MaterialButtonGroup from '@mui/material/ButtonGroup';

export const ButtonGroup = ({ buttons, color, ...props }) => {
  return (
    <MaterialButtonGroup color={color} {...props}>
      {buttons.map((button) => (
        <Button>{button.label}</Button>
      ))}
    </MaterialButtonGroup>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  fullWidth: PropTypes.bool,
};
