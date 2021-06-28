import React from 'react';
import PropTypes from 'prop-types';
import MaterialTextField from '@material-ui/core/TextField';

export const TextField = ({ label, variant, error, helperText }) => {
  return (
    <form noValidate autoComplete="off">
      <MaterialTextField id="standard-basic" label={label} variant={variant} error={error} helperText={helperText} />
    </form>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

TextField.defaultProps = {
  label: 'Standard',
  variant: 'standard',
  error: false,
  helperText: undefined
};
