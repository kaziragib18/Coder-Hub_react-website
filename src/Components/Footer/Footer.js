import { faMapMarkedAlt, faPhoneVolume, faDesktop, faSchool, faAddressCard, faDice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
      return (
            <div>
                  <div className="footer-container mt-3">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-5">
                                          <div className="left-container text-start">
                                                <h1 className="fst-italic">CODER HUB</h1>
                                                <div className="icons-container d-flex text-center ">
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faDesktop} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faSchool} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faAddressCard} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faDice} />
                                                      </div>
                                                </div>
                                                <p className="mt-4 ">
                                                      <small>
                                                            *These statements have not been evaluated by the Food and
                                                            Drug Administration. These products are not intended to
                                                            diagnose.
                                                      </small>
                                                </p>

                                                <p className="mt-5">
                                                      <small>kaziragib18 © All rights reserved.</small>
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-md-2">
                                          <div className="footer-menu-container">
                                                <ul>
                                                      <li className="footer-menu">Home</li>
                                                      <li className="footer-menu">Services</li>
                                                      <li className="footer-menu">Course</li>
                                                      <li className="footer-menu">Contact us</li>
                                                      <li className="footer-menu">About us</li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-md-5">
                                          <div className="right-footer-container">
                                                <h3 className="p-2">Sign up for the newsletter</h3>
                                                <input
                                                      className="footer-input"
                                                      type="email"
                                                      placeholder="Enter Email"
                                                />
                                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                                      <div className="foter-phone-icon">
                                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                                      </div>
                                                      <div>
                                                            <h5> +8801949434546</h5>
                                                      </div>
                                                </div>
                                                <div className="map d-flex align-items-center justify-content-center">
                                                      <div className="foter-phone-icon">
                                                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                                                      </div>
                                                      <div className="p-3">
                                                            <p>C block, Road 3, Bashundhora R/A<br /> 102 henis more , Dhaka- 1200
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};


export default Footer;