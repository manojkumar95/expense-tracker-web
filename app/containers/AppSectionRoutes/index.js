import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader.jsx';
import Notfound from '../NotFound';

/**
 * Importing Home component on demand
 */
const Home = Loadable({
  loader: () => new Promise(resolve => {
    import('../Home').then(res => resolve(res.default));
  }),
  loading: Loader
});

/**
 * Importing AddExpense component on demand
 */
const AddExpense = Loadable({
  loader: () => new Promise(resolve => {
    import('../AddExpense/index').then(res => resolve(res.default));
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
              path="/home"
              render={props => (
                <Home {...props} {...this.state} />
              )}
            />
            <Route
              exact
              path="/add-expense"
              render={props => (<AddExpense {...props} />)}
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
