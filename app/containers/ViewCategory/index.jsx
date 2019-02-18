import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryAction from '../../actions/category';

import Table from '../../components/Table';

import '../../../assets/styles/containers/ViewCategory.scss';

class ViewCategory extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-12">
              <span className="category-title">
                Categories
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <div className="form-container">
                <Table
                  categories={categories}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewCategory.propTypes = {
  getCategories: PropTypes.func.isRequired,
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
  getCategories: () => dispatch(CategoryAction.getCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory);
