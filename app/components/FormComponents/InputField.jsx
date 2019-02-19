import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  className,
  name,
  label,
  placeholder,
  autocomplete,
  handleChange,
  isLableRequired,
  isRequired,
  type,
  error,
  value,
  readOnly
}) => (
  <React.Fragment>
    <div>
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autocomplete}
        type={type}
        value={value}
        readOnly={readOnly}
        maxLength="100"
      />
      {
        error && <div className="error-message">{label} {error}</div>
      }
    </div>
  </React.Fragment>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLableRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  autocomplete: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool
};

InputField.defaultProps = {
  isLableRequired: false,
  placeholder: '',
  className: '',
  handleChange: () => {},
  autocomplete: 'on',
  isRequired: false,
  type: 'text',
  error: '',
  value: '',
  readOnly: false
};

export default InputField;
