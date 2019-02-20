import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en');
momentLocalizer();

const DatePicker = ({
  minDate, maxDate, name, isLableRequired,
  label, dateFormat, value, handleChange
}) => (
  <Fragment>
    {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label}>{label}</label>
      </div>
    }
    <DateTimePicker
      label={label}
      name={name}
      value={!value ? null : new Date(value)}
      format={dateFormat}
      onChange={handleChange}
      min={minDate}
      max={maxDate}
      time={false}
    />
  </Fragment>
);

DatePicker.defaultProps = {
  name: '',
  dateFormat: 'DD/MM/YYYY',
  minDate: new Date('1910-01-01 00:00:00'),
  maxDate: new Date(),
  isLableRequired: false,
  handleChange: null,
  value: ''
};

DatePicker.propTypes = {
  name: PropTypes.string,
  dateFormat: PropTypes.string,
  isLableRequired: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ])
};

export default DatePicker;
