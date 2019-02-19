import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectField = ({
  className,
  name,
  label,
  placeholder,
  handleChange,
  isLableRequired,
  isRequired,
  options,
  value,
  isMulti,
  labelKey,
  valueKey,
  disabled,
  error,
  simpleValue
}) => (
  <React.Fragment>
    <div className="m-t-20">
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <Select
        name={name}
        className={className}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        value={value}
        clearable={false}
        multi={isMulti}
        disabled={disabled}
        labelKey={labelKey}
        valueKey={valueKey}
        simpleValue={simpleValue}
      />
      {
        error && <div className="error-message">{label} {error}</div>
      }
    </div>
  </React.Fragment>
);

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLableRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  labelKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  error: PropTypes.string,
  simpleValue: PropTypes.bool
};

SelectField.defaultProps = {
  isLableRequired: false,
  placeholder: '',
  className: '',
  handleChange: () => {},
  isRequired: false,
  isMulti: false,
  options: [],
  disabled: false,
  value: '',
  error: '',
  simpleValue: false
};

export default SelectField;
