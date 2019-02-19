import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputField from '../FormComponents/InputField';

const ProfileForm = ({
  handleFormSubmit, cancelForm, onFirstNameChange, onLastNameChange, onPhoneNumberChange,
  firstNameValue, idValue, lastNameValue, phoneNumberValue,
  firstNameError, lastNameError, phoneNumberError
}) => (
  <Fragment>
    <form className="expense-form">
      <div className="row form-field">
        <div className="col-12 col-md-6 mt-2 mb-2">
          <InputField
            name="id"
            label="Name"
            type="text"
            isLableRequired
            isRequired
            value={idValue}
            readOnly
          />
        </div>
        <div className="col-12 col-md-6 mt-2 mb-2">
          <InputField
            name="firstName"
            label="First Name"
            type="text"
            isLableRequired
            isRequired
            value={firstNameValue}
            handleChange={onFirstNameChange}
            error={firstNameError}
          />
        </div>
      </div>
      <div className="row form-field">
        <div className="col-12 mt-4 mb-4">
          <InputField
            name="lastName"
            type="text"
            label="Last Name"
            isLableRequired
            isRequired
            value={lastNameValue}
            handleChange={onLastNameChange}
            error={lastNameError}
          />
        </div>
      </div>
      <div className="row form-field">
        <div className="col-12 col-md-6 mt-2 mb-5">
          <InputField
            name="phoneNumber"
            type="text"
            label="Phone Number"
            isLableRequired
            value={phoneNumberValue}
            handleChange={onPhoneNumberChange}
            error={phoneNumberError}
          />
        </div>
      </div>
    </form>
    <div className="row">
      <div className="col-8 col-md-12 offset-4 offset-md-4 p-0">
        <button
          className="btn btn-default active-btn"
          onClick={handleFormSubmit}
        >
            Update
        </button>
        <button
          className="btn btn-default cancel-btn m-l-15 m-r-15"
          onClick={cancelForm}
        >
            Cancel
        </button>
      </div>
    </div>
  </Fragment>
);

ProfileForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
  cancelForm: PropTypes.func.isRequired,
  firstNameError: PropTypes.string.isRequired,
  lastNameError: PropTypes.string.isRequired,
  phoneNumberError: PropTypes.string.isRequired,
  firstNameValue: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string.isRequired,
  phoneNumberValue: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired
};

export default ProfileForm;
