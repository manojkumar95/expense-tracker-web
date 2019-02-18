import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryAction from '../../actions/category';
import ExpenseAction from '../../actions/expense';

import AddExpenseForm from '../../components/AddExpenseForm';

class AddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      titleValue: '',
      amountValue: '',
      notesValue: '',
      categoryValue: [],
      titleError: '',
      amountError: '',
      categoryError: ''
    };
  }

  componentDidMount() {
    this.props.getCategories();
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

  handleFormSubmit = () => {
    const {
      notesValue, titleValue, amountValue, categoryValue
    } = this.state;
    const { user } = this.props;
    this.props.createExpense({
      notes: notesValue,
      title: titleValue,
      amount: amountValue,
      categories: categoryValue,
      user
    });
    this.resetFormValues();
  }

  resetFormValues= () => {
    this.setState({
      titleValue: '',
      amountValue: '',
      notesValue: '',
      categoryValue: [],
      titleError: '',
      amountError: '',
      categoryError: ''
    });
  }

  cancelForm = () => {
    this.resetFormValues();
  }

  render() {
    const { categories } = this.props;
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
                  category={categories}
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

AddExpense.propTypes = {
  getCategories: PropTypes.func.isRequired,
  createExpense: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  categories: PropTypes.array
};

AddExpense.defaultProps = {
  categories: []
};

const mapStateToProps = state => ({
  categories: Array.from(state.category.get('categoriesList') || []),
  loading: state.category.get('loading'),
  user: state.user.get('userId')
});

const mapDispatchToProps = dispatch => ({
  createExpense: data => dispatch(ExpenseAction.createExpense(data)),
  getCategories: () => dispatch(CategoryAction.getCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
