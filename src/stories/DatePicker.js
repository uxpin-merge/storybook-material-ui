import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const DatePicker = ({ disableToolbar, variant, label, format }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar={disableToolbar}
        variant={variant}
        format={format}
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),
  label: PropTypes.string,
  disableToolbar: PropTypes.bool,
  format: PropTypes.string,
};

DatePicker.defaultProps = {
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),
  label: 'DatePicker',
  disableToolbar: false,
  format: 'MM/dd/yyyy',
};
