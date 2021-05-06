import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MaterialButtonGroup from '@material-ui/core/ButtonGroup';

export const ButtonGroup = ({ buttons, type, ...props }) => {
  return (
    <MaterialButtonGroup
      color={type}
      {...props}
    >
      {buttons.map((button) => (
        <Button style={{ backgroundColor: button.backgroundColor }}>{button.label}</Button>
      ))}
    </MaterialButtonGroup>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf({ label: PropTypes.string, backgroundColor: PropTypes.string }),
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

ButtonGroup.defaultProps = {
  buttons: [{ label: 'one' }, { label: 'two' }, {  label: 'three' }],
  size: 'medium',
  variant: 'contained',
  type: 'primary',
  disabled: false,
  orientation: 'horizontal',
};
