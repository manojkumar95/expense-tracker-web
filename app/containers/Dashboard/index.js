import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import UserAction from '../../actions/user.js';
import AppHeader from '../../components/AppHeader';
import AppSectionRoutes from '../../containers/AppSectionRoutes';
import '../../../assets/styles/containers/Dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {
      userId, firstName, lastName
    } = this.props;
    return (
      <Fragment>
        <main className="app-mainArea">
          <AppHeader
            {...this.props}
            userId={userId}
            firstName={firstName}
            lastName={lastName}
          />
          <AppSectionRoutes
            {...this.props}
            userId={userId}
            firstName={firstName}
            lastName={lastName}
          />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getUser: PropTypes.func.isRequired,
  userId: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

Dashboard.defaultProps = {
  firstName: '',
  userId: '',
  lastName: ''
};

const mapStateToProps = state => ({
  userId: state.user.get('userId'),
  firstName: state.user.get('firstName'),
  lastName: state.user.get('lastName')
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(UserAction.getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

