import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../FormComponents/InputField';
import TextArea from '../FormComponents/TextArea';
import SelectField from '../FormComponents/Selectfield';

import '../../../assets/styles/containers/AddExpense.scss';

const AddExpenseForm = ({
  handleFormSubmit, cancelForm, category, onTitleChange, onAmountChange, onNotesChange, onCategoryChange,
  titleValue, amountValue, notesValue, categoryValue,
  titleError, amountError, categoryError
}) => (
  <form className="expense-form">
    <div className="row form-field">
      <div className="col-12 col-md-6 mt-2 mb-2">
        <InputField
          name="title"
          label="Name"
          type="text"
          isLableRequired
          isRequired
          value={titleValue}
          handleChange={onTitleChange}
          error={titleError}
        />
      </div>
      <div className="col-12 col-md-6 mt-2 mb-2">
        <InputField
          name="amount"
          label="Amount"
          type="text"
          isLableRequired
          isRequired
          value={amountValue}
          handleChange={onAmountChange}
          error={amountError}
        />
      </div>
    </div>
    <div className="row form-field">
      <div className="col-12 mt-4 mb-4">
        <TextArea
          name="notes"
          type="textArea"
          label="Notes"
          isLableRequired
          value={notesValue}
          handleChange={onNotesChange}
        />
      </div>
    </div>
    <div className="row form-field">
      <div className="col-12 col-md-6 mt-2 mb-5">
        <SelectField
          name="expenseCategory"
          label="Expense Category"
          isLableRequired
          options={category}
          placeholder="Select category"
          simpleValue
          labelKey="name"
          valueKey="id"
          isRequired
          value={categoryValue}
          handleChange={onCategoryChange}
          error={categoryError}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-8 col-md-12 offset-4 offset-md-4 p-0">
        <button
          type="submit"
          className="btn btn-default active-btn"
          onClick={handleFormSubmit}
        >
          Save
        </button>
        <button
          className="btn btn-default active-btn cancel-btn m-l-15 m-r-15"
          onClick={cancelForm}
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
);

AddExpenseForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onNotesChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  cancelForm: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  titleError: PropTypes.string.isRequired,
  amountError: PropTypes.string.isRequired,
  categoryError: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired,
  amountValue: PropTypes.string.isRequired,
  notesValue: PropTypes.string.isRequired,
  categoryValue: PropTypes.string.isRequired
};

export default AddExpenseForm;
