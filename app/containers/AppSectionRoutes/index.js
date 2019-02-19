import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader.jsx';
import Notfound from '../NotFound';

/**
 * Importing AddExpense component on demand
 */
const AddExpense = Loadable({
  loader: () => new Promise(resolve => {
    import('../AddExpense/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

/**
 * Importing ViewCategory component on demand
 */
const ViewCategory = Loadable({
  loader: () => new Promise(resolve => {
    import('../ViewCategory/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

/**
 * Importing ViewExpense component on demand
 */
const ViewExpense = Loadable({
  loader: () => new Promise(resolve => {
    import('../ViewExpense/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

/**
 * Importing Profile component on demand
 */
const Profile = Loadable({
  loader: () => new Promise(resolve => {
    import('../Profile/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

class AppSectionRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      firstName: this.props.firstName,
      lastName: this.props.lastName
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      userId: nextProps.userId,
      firstName: nextProps.firstName,
      lastName: nextProps.lastName

    };
  }

  render() {
    return (
      <section className="appArea">
        <div className="container-fluid pb-3">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/view-expense" />
              )}
            />
            <Route
              exact
              path="/add-expense"
              render={props => (<AddExpense {...props} {...this.state} />)}
            />
            <Route
              exact
              path="/view-category"
              render={props => (<ViewCategory {...props} />)}
            />
            <Route
              exact
              path="/view-expense"
              render={props => (<ViewExpense {...props} />)}
            />
            <Route
              exact
              path="/edit-profile"
              render={props => (<Profile {...props} />)}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
      </section>
    );
  }
}

AppSectionRoutes.propTypes = {
  history: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  userId: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  accessToken: PropTypes.string
};

AppSectionRoutes.defaultProps = {
  firstName: '',
  userId: '',
  lastName: '',
  role: '',
  accessToken: ''
};

export default AppSectionRoutes;
