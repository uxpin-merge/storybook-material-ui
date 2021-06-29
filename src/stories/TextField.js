import React from 'react';
import PropTypes from 'prop-types';
import MaterialTextField from '@material-ui/core/TextField';

export const TextField = ({ label, variant, error, helperText, disabled, required }) => {
  return (
    <form noValidate autoComplete="off">
      <MaterialTextField
        id="standard-basic"
        label={label}
        variant={variant}
        error={error}
        disabled={disabled}
        required={required}
        helperText={helperText} />
    </form>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
};

TextField.defaultProps = {
  label: 'Standard',
  variant: 'standard',
  disabled: false,
  required: false,
  error: false,
  helperText: undefined
};
