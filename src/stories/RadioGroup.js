import React from 'react';
import PropTypes from 'prop-types';
import MaterialRadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const RadioGroup = ({ items }) => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <MaterialRadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      {items.map(({ value, label }) => (
        <FormControlLabel value={value} control={<Radio />} label={label} />
      ))}
    </MaterialRadioGroup>
  );
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

RadioGroup.defaultProps = {
  items: [
    { value: 'option_1', label: 'OPTION 1' },
    { value: 'option_2', label: 'OPTION 2' },
    { value: 'other', label: 'Other' },
  ]
};