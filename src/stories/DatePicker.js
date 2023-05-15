import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { DatePicker as DatePickerM } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const DatePicker = ({ disabled, label, helperText, view }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerM
        disabled={disabled}
        label={label}
        value={selectedDate}
        view={view}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} helperText={helperText} />}
      />
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  /**
   * The label text of the input.
   */
  label: PropTypes.string,

  /**
   * The helper text of the input.
   */
  helperText: PropTypes.string,

  /**
   * The value of the picker.
   */
  value: PropTypes.node,

  /**
   * If true, the picker and text field are disabled.
   * */
  disabled: PropTypes.bool,

  /**
   * The visible view. Used when the component view is controlled. Must be a valid option from views list.
   */
  view: PropTypes.oneOf(['day', 'month', 'year']),
};

DatePicker.defaultProps = {
  label: 'DatePicker',
  disabled: false,
};
