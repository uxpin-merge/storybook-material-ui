import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MaterialSelect from '@mui/material/Select';
import PropTypes from 'prop-types';

export function Select({ inputLabel, options, variant, fullWidth }) {
  return (
    <div style={{ minWidth: 120 }}>
      <FormControl variant={variant} fullWidth={fullWidth}>
        <InputLabel id="select-label">{inputLabel}</InputLabel>
        <MaterialSelect labelId="select-label" id="select">
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MaterialSelect>
      </FormControl>
    </div>
  );
}

Select.propTypes = {
  fullWidth: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  inputLabel: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};
