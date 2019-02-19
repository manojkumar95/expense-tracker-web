import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import MainRoutes from '../Routes';

const App = props => (
  <Fragment>
    <MainRoutes {...props} />
    <NotificationContainer />
  </Fragment>
);

export default withRouter(connect(null, null)(App));
