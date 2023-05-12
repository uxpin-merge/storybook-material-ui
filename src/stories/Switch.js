import React from 'react';
import PropTypes from 'prop-types';
import MaterialSwitch from '@mui/material/Switch';

export const Switch = ({ color, disabled, size }) => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <MaterialSwitch
      name='checked'
      checked={state.checked}
      onChange={handleChange}
      color={color}
      disabled={disabled}
      size={size}
    >
    </MaterialSwitch>
  );
};

Switch.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool
};
