import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../FormComponents/InputField';

const CategoryModal = ({
  nameValue, nameError, onNameChange, clearForm, handleFormSubmit
}) => (
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h4 className="modal-title category-title">Create Category</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <form className="expense-form">
            <div className="row form-field">
              <div className="col-12 mt-2 mb-2">
                <InputField
                  name="title"
                  label="Name"
                  type="text"
                  isLableRequired
                  isRequired
                  value={nameValue}
                  handleChange={onNameChange}
                  error={nameError}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="row">
            <button
              className="btn btn-default active-btn"
              onClick={handleFormSubmit}
              data-dismiss="modal"
            >
                Save
            </button>
            <button
              className="btn btn-default cancel-btn m-l-15 m-r-15"
              onClick={clearForm}
              data-dismiss="modal"
              disabled={nameError}
            >
                Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CategoryModal.propTypes = {
  nameValue: PropTypes.string.isRequired,
  nameError: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired
};

export default CategoryModal;
