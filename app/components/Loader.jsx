import React from 'react';
import { BeatLoader } from 'react-spinners';
import '../../assets/styles/components/Loader.scss';

const Loader = () => (
  <div>
    <div className="loadingOverlay">
      <div className="loader">
        <BeatLoader
          color="#123abc"
          loading
          size={10}
          margin="10px"
        />
      </div>
    </div>
  </div>);

export default Loader;
