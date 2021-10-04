import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
      return (
            <div className="header-container ">
                  <div className="">
                        <div className="row d-flex header align-items-center justify-content-center">
                              <NavBar></NavBar>
                              <div className="col-md-6">
                                    <h1 className="header__title">
                                          Learn To Code<br /> Learn Without Limits
                                    </h1>
                                    <p className="text-white text-center mt-3">
                                          Start Learning with free Courses, for professional development report career benefits like getting a promotion, a raise, or starting a new career.
                                    </p>
                                    <Link to='/about'>
                                          <button className="mt-3 header__button">About Us</button>
                                    </Link>
                              </div>
                              <div className="col-md-6"></div>
                        </div>
                  </div>
            </div>
      );
};

export default Header;