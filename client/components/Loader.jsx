import React from 'react';
import FadeIn from 'react-fade-in';
import ReactLoading from 'react-loading';

function Loader() {
  return (
    <FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <ReactLoading type="bars" color="white" height="50%" width="50%" />
      </div>
    </FadeIn>
  );
}

export default Loader;
