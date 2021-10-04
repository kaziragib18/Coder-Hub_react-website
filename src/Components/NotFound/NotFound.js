import React from 'react';
import NavBar from '../NavBar/NavBar';

const NotFound = () => {
      return (
            <div className="p-3">
            <NavBar></NavBar>
            <h4 className="text-danger">404 page not found!</h4>
      </div>
      );
};

export default NotFound;