import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  className,
  name,
  label,
  isLableRequired,
  isRequired,
  type,
  handleChange,
  value
}) => (
  <React.Fragment>
    <div>
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <textarea
        name={name}
        className={className}
        type={type}
        onChange={handleChange}
        value={value}
        maxLength="255"
      />
    </div>
  </React.Fragment>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLableRequired: PropTypes.bool,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

TextArea.defaultProps = {
  isLableRequired: false,
  className: '',
  handleChange: () => {},
  isRequired: false,
  type: 'textArea',
  value: ''
};

export default TextArea;
