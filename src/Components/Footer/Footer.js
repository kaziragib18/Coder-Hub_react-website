// font awesone icon added 
import { faUniversity,  faGlobe, faGraduationCap, faPhone, faMapMarked, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
      return (
            <div>
                  <div className="footer__container mt-3">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-5">
                                          <div className="left-container text-start">
                                                <h2 className="fst-italic pt-2">CODER HUB</h2>
                                                <div className="icons-container d-flex text-center ">
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faMapMarker} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faUniversity} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faGlobe} />
                                                      </div>
                                                      <div className="icon">
                                                            <FontAwesomeIcon icon={faGraduationCap} />
                                                      </div>
                                                </div>
                                                <p className="mt-4 ">
                                                      <small>
                                                      Coder hub is the a online learning platform that offers anyone, anywhere access to online courses.
                                                      </small>
                                                </p>

                                                <p className="mt-5">
                                                      <small>© All rights reserved, Coder Hub 2021</small>
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-md-2">
                                          <div className="footer__menu__container">
                                                <ul>
                                                      <li className="footer__menu">Home</li>
                                                      <li className="footer__menu">Services</li>
                                                      <li className="footer__menu">Course</li>
                                                      <li className="footer__menu">Contact us</li>
                                                      <li className="footer__menu">About us</li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-md-5">
                                          <div className="right__footer__container">
                                                <h4 className="p-2">For updates subscribe to us</h4>
                                                <input
                                                      className="footer__input mx-4 rounded"
                                                      type="email"
                                                      placeholder="Enter Your Email"
                                                />
                                                <button className="btn btn-dark">Subscribe</button>
                                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                                      <div className="footer__used__icon">
                                                            <FontAwesomeIcon icon={faPhone} />
                                                      </div>

                                                      <div>
                                                            <h5 className="ps-3">+8801949434546</h5>
                                                      </div>
                                                </div>
                                                <div className="map d-flex align-items-center justify-content-center">
                                                      <div className="footer__used__icon mb-4">
                                                            <FontAwesomeIcon icon={faMapMarked} />
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