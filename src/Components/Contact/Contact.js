import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Contact.css';

const Contact = () => {
      return (
            <div>
                  <div className="p-4">
                        <NavBar></NavBar>
                        <div className="col-md-6 d-flex">
                        {/* Simple contact page  */}
                              <div className="col-md-12">
                                    <h2 className="pt-5 mt-5 mb-4">Need help?<hr /></h2>
                                    <p>If you’re a learner on the Coursera platform and have questions or need technical assistance, please visit our Learner Help Center for platform tutorials, FAQs or to chat with a member of our Customer Support team. You can also browse our most popular support topics:</p>
                                    <ul>
                                          <li>Account Setup</li>
                                          <li>How to enroll in a course</li>
                                          <li>Downloading videos</li>
                                          <li>Notifications</li>

                                    </ul>
                                    <p className="text-start pb-5">contact us <span className="text-primary">coderhub2021@gmail.com</span> for any quries </p>
                              </div>
                              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1589229298650-FAQ%20Page.png" alt="" />
                        </div>


                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Contact;