import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainRoutes from '../Routes';

const App = props => (
  <Fragment>
    <MainRoutes {...props} />
  </Fragment>
);

export default withRouter(connect(null, null)(App));
