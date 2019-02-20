import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserAction from '../../actions/user';
import { required, validatePhoneNumber, integer } from '../../utils/validation';
import ProfileForm from '../../components/ProfileForm';
import '../../../assets/styles/containers/AddExpense.scss';

class Profile extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      user, firstName, lastName, phoneNumber
    } = nextProps;
    if (!prevState.initialLoad && user) {
      return {
        idValue: user,
        firstNameValue: firstName,
        lastNameValue: lastName,
        phoneNumberValue: phoneNumber,
        initialLoad: true
      };
    }
    return null;
  }
  constructor() {
    super();
    this.state = {
      idValue: '',
      firstNameValue: '',
      lastNameValue: '',
      phoneNumberValue: '',
      firstNameError: '',
      lastNameError: '',
      phoneNumberError: '',
      initialLoad: false,
      disabledOnInitial: true
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  onFirstNameChange = evt => {
    const { value } = evt.target;
    this.setState({
      firstNameValue: value,
      firstNameError: required(value),
      disabledOnInitial: false
    });
  }

  onLastNameChange = evt => {
    const { value } = evt.target;
    this.setState({
      lastNameValue: value,
      lastNameError: required(value),
      disabledOnInitial: false
    });
  }

  onPhoneNumberChange = evt => {
    const { value } = evt.target;
    this.setState({
      phoneNumberValue: value,
      disabledOnInitial: false
    });
    const requiredPhoneNumberValue = required(value);
    const isInteger = integer(value);
    const isPhoneNumberFormat = validatePhoneNumber(value);
    if (requiredPhoneNumberValue) {
      this.setStateValues('phoneNumberError', requiredPhoneNumberValue);
    } else if (isInteger) {
      this.setStateValues('phoneNumberError', isInteger);
    } else if (isPhoneNumberFormat) {
      this.setStateValues('phoneNumberError', isPhoneNumberFormat);
    } else {
      this.setStateValues('phoneNumberError', '');
    }
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
      firstNameValue, lastNameValue, phoneNumberValue, idValue
    } = this.state;
    this.props.updateUser({
      firstName: firstNameValue,
      lastName: lastNameValue,
      phoneNumber: phoneNumberValue,
      user: idValue
    });
    this.resetFormValues();
  }

  resetFormValues = () => {
    this.setState({
      firstNameValue: '',
      lastNameValue: '',
      idValue: '',
      phoneNumberValue: '',
      firstNameError: '',
      lastNameError: '',
      phoneNumberError: ''
    });
    this.props.history.push('/view-expense');
  }

  cancelForm = () => {
    this.resetFormValues();
  }

  render() {
    const {
      idValue, firstNameValue, lastNameValue, phoneNumberValue,
      firstNameError, lastNameError, phoneNumberError, disabledOnInitial
    } = this.state;
    const {
      onFirstNameChange, onLastNameChange, onPhoneNumberChange,
      handleFormSubmit, cancelForm
    } = this;
    return (
      <div className="add-expense-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-12">
              <span className="expense-title">
                Update User
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <div className="form-container">
                <ProfileForm
                  onFirstNameChange={onFirstNameChange}
                  onLastNameChange={onLastNameChange}
                  onPhoneNumberChange={onPhoneNumberChange}
                  handleFormSubmit={handleFormSubmit}
                  idValue={idValue}
                  firstNameValue={firstNameValue}
                  lastNameValue={lastNameValue}
                  phoneNumberValue={phoneNumberValue}
                  firstNameError={firstNameError}
                  lastNameError={lastNameError}
                  phoneNumberError={phoneNumberError}
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

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loading: state.category.get('loading'),
  user: state.user.get('userId'),
  firstName: state.user.get('firstName'),
  lastName: state.user.get('lastName'),
  phoneNumber: state.user.get('phoneNumber')
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(UserAction.getUser()),
  updateUser: data => dispatch(UserAction.updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
