import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { required, integer, isEmptyArray } from '../../utils/validation';
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
      categoryValue: '',
      titleError: '',
      amountError: '',
      categoryError: '',
      disabledOnInitial: true
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onTitleChange = evt => {
    const { value } = evt.target;
    this.setState({
      titleValue: value,
      titleError: required(value)
    });
  }

  onAmountChange = evt => {
    const { value } = evt.target;
    const requiredAmountValue = required(value);
    const isInteger = integer(value);
    this.setState({
      amountValue: value
    });
    if (requiredAmountValue) {
      this.setStateValues('amountError', requiredAmountValue);
    } else if (isInteger) {
      this.setStateValues('amountError', isInteger);
    } else {
      this.setStateValues('amountError', '');
    }
  }

  onNotesChange = evt => {
    const { value } = evt.target;
    this.setStateValues('notesValue', value);
  }

  onCategoryChange = selectedOption => {
    this.setStateValues('categoryValue', selectedOption);
    this.setStateValues('categoryError', isEmptyArray(selectedOption));
    this.setStateValues('disabledOnInitial', false);
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
      categories: categoryValue.split(','),
      user
    }, () => {
      this.resetFormValues();
    });
  }

  resetFormValues= () => {
    this.setState({
      titleValue: '',
      amountValue: '',
      notesValue: '',
      categoryValue: '',
      titleError: '',
      amountError: '',
      categoryError: ''
    });
    this.props.history.push('/view-expense');
  }

  cancelForm = () => {
    this.resetFormValues();
  }

  render() {
    const { categories } = this.props;
    const {
      titleValue, amountValue, notesValue, categoryValue,
      titleError, amountError, categoryError, disabledOnInitial
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
                  disabledOnInitial={disabledOnInitial}
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
  history: PropTypes.object.isRequired,
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
  createExpense: (data, cb) => dispatch(ExpenseAction.createExpense(data, cb)),
  getCategories: () => dispatch(CategoryAction.getCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
