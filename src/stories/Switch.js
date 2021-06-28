import React from 'react';
import PropTypes from 'prop-types';
import MaterialSwitch from '@material-ui/core/Switch';

export const Switch = ({ color }) => {
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
    >
    </MaterialSwitch>
  );
};

Switch.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
};

Switch.defaultProps = {
  color: 'primary',
}
