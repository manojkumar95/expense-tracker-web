import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryAction from '../../actions/category';

import Table from '../../components/Table';
import CategoryModal from '../../components/CategoryModal';

import '../../../assets/styles/containers/ViewCategory.scss';

class ViewCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      nameError: ''
    };
  }
  componentDidMount() {
    this.props.getCategories();
  }

  onNameChange = evt => {
    const { value } = evt.target;
    this.setState({
      nameValue: value
    });
  }

  handleFormSubmit = () => {
    const { nameValue } = this.state;
    this.props.createCategory({
      name: nameValue,
      type: 'Custom'
    }, () => {
      this.clearForm();
      this.props.getCategories();
    });
  }

  clearForm = () => {
    this.setState({
      nameValue: '',
      nameError: ''
    });
  }

  render() {
    const { categories } = this.props;
    const { nameError, nameValue } = this.state;
    const { onNameChange, handleFormSubmit, clearForm } = this;
    return (
      <div className="category-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-md-10 col-6">
              <span className="category-title">
                Categories
              </span>
            </div>
            <div className="col-md-2 col-6 p-0">
              <button
                type="button"
                className="btn btn-default active-btn float-right"
                data-toggle="modal"
                data-target="#myModal"
              >
                Create
              </button>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <Table
                categories={categories}
              />
            </div>
          </div>
        </div>
        <CategoryModal
          nameValue={nameValue}
          nameError={nameError}
          onNameChange={onNameChange}
          handleFormSubmit={handleFormSubmit}
          clearForm={clearForm}
        />
      </div>
    );
  }
}

ViewCategory.propTypes = {
  getCategories: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
  categories: PropTypes.array
};

ViewCategory.defaultProps = {
  categories: []
};

const mapStateToProps = state => ({
  categories: Array.from(state.category.get('categoriesList') || []),
  loading: state.category.get('loading'),
  user: state.user.get('userId')
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(CategoryAction.getCategory()),
  createCategory: (data, cb) => dispatch(CategoryAction.createCategory(data, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory);
