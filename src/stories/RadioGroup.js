import React from 'react';
import PropTypes from 'prop-types';
import MaterialRadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioGroup = ({ items, formLabel, defaultValue }) => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{formLabel}</FormLabel>
      <MaterialRadioGroup
        aria-label="gender"
        name="gender1"
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
      >
        {items.map(({ value, label }) => (
          <FormControlLabel value={value} control={<Radio />} label={label} />
        ))}
      </MaterialRadioGroup>
    </FormControl>
  );
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  formLabel: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
