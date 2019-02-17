import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/AppHeader.scss';
import happyFox from '../../../assets/images/happyfox.svg';

const AppHeader = props => {
  const { firstName, lastName } = props;
  return (
    <header className="app-header text-right">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
            <div className="app-logo text-center">
              <img className="theme-logo" src={happyFox} alt="HappyFox" />
            </div>
            <div className="float-right">
              {`Hi ${firstName} ${lastName}`}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

AppHeader.defaultProps = {
  firstName: '',
  lastName: ''
}

export default AppHeader;
