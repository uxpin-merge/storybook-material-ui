import React from 'react';
import PropTypes from 'prop-types';
import MaterialTextField from '@mui/material/TextField';

export const TextField = ({ label, variant, error, helperText, disabled, required, ...moreProps }) => {
  return (
    <form noValidate autoComplete="off">
      <MaterialTextField
        {...moreProps}
        id="standard-basic"
        label={label}
        variant={variant}
        error={error}
        disabled={disabled}
        required={required}
        helperText={helperText}
      />
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
  placeholder: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
};
