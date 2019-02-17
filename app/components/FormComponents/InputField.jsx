import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  className,
  name,
  type,
  label,
  placeholder,
  autocomplete,
  handleChange,
  isLableRequired,
  isRequired
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
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autocomplete}
      />
    </div>
  </React.Fragment>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLableRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  autocomplete: PropTypes.string,
  isRequired: PropTypes.bool
};

InputField.defaultProps = {
  isLableRequired: false,
  placeholder: '',
  type: 'text',
  className: '',
  handleChange: () => {},
  autocomplete: 'on',
  isRequired: false
};

export default InputField;
