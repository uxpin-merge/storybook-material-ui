import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaterialSelect from '@material-ui/core/Select';
import PropTypes from "prop-types";

export function Select({ inputLabel, options, multiple, variant, width }) {

  return (
    <div>
      <FormControl variant={variant} style={{ width }}>
        <InputLabel id="select-label">{inputLabel}</InputLabel>
        <MaterialSelect
          labelId="select-label"
          id="select"
          multiple={multiple}
        >
          {options.map((option) => <MenuItem value={option.value}>{option.label}</MenuItem>)}
        </MaterialSelect>
      </FormControl>
    </div>
  );
}

Select.propTypes = {
  width: PropTypes.number,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  inputLabel: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

Select.defaultProps = {
  inputLabel: 'Age',
  options: [{
    label: 'Ten',
    value: 10,
  },{
    label: 'Twenty',
    value: 20,
  },{
    label: 'Thirty',
    value: 30,
  }],
  multiple: false,
  variant: 'standard',
  width: 120,
};

