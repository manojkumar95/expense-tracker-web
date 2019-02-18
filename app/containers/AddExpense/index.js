import React from 'react';
import { connect } from 'react-redux';

import AddExpenseForm from '../../components/AddExpenseForm';

class AddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      titleValue: '',
      amountValue: '',
      notesValue: '',
      categoryValue: '',
      titleError: '',
      amountError: '',
      categoryError: ''
    };
  }

  onTitleChange = evt => {
    const { value } = evt.target;
    this.setStateValues('titleValue', value);
  }

  onAmountChange = evt => {
    const { value } = evt.target;
    this.setStateValues('amountValue', value);
  }

  onNotesChange = evt => {
    const { value } = evt.target;
    this.setStateValues('notesValue', value);
  }

  onCategoryChange = selectedOption => {
    this.setStateValues('categoryValue', selectedOption);
  }

  /**
   * To change the react state
   * @param {string} name 'name of the property to save in state'
   * @param {any} value value of the name to save in state
   */
  setStateValues = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = formValues => {
    console.log('formValues', formValues);
  }

  cancelForm = () => {
    this.setState({
      titleValue: '',
      amountValue: '',
      notesValue: '',
      categoryValue: '',
      titleError: '',
      amountError: '',
      categoryError: ''
    });
  }

  render() {
    const {
      titleValue, amountValue, notesValue, categoryValue,
      titleError, amountError, categoryError
    } = this.state;
    const {
      onTitleChange, onAmountChange, onNotesChange, onCategoryChange,
      handleFormSubmit, cancelForm
    } = this;
    return (
      <div className="add-expense-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-12">
              <span className="expense-title">
                Create Expense
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <div className="form-container">
                <AddExpenseForm
                  category={[]}
                  onTitleChange={onTitleChange}
                  onAmountChange={onAmountChange}
                  onNotesChange={onNotesChange}
                  onCategoryChange={onCategoryChange}
                  handleFormSubmit={handleFormSubmit}
                  titleValue={titleValue}
                  amountValue={amountValue}
                  notesValue={notesValue}
                  categoryValue={categoryValue}
                  titleError={titleError}
                  amountError={amountError}
                  categoryError={categoryError}
                  cancelForm={cancelForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(AddExpense);
