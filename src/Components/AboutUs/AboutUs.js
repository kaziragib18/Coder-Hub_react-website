import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './AboutUs.css'

const AboutUs = () => {
      return (
            <div className="p-4">
                  <NavBar></NavBar>
                  <div className="pt-5">
                        <h4 className="pb-2">Expanding access to world-class learning</h4>
                        <p className="pb-2">We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p><hr />
                        <div className="about__img">
                              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <h1 className="pb-4">Our Story<hr/></h1>
                        <div className='story__div col-md-12 gap-4 d-flex ps-5 ms-5'>
                              <div className="">
                                    <p>Coursera was founded in 2021 with a vision of providing life-transforming learning experiences to learners around the world. Today, Coder hub is a online learning platform that offers anyone, anywhere, access to online courses. We aim to make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all. </p>
                                    <p>With our growing network of partner organizations, we continue to launch new programs that help expand access to learning for veterans, the formerly incarcerated, and the educationally underserved. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.No matter who we are or where we are,learning empowers us to change and grow and redefine what’s possible. That’s why access to the best learning is a right, not a privilege. And that’s why Code Hub is here. We partner with the best institutions to bring the best learning
                                    to every corner of the world.</p>
                              </div>
                              <div className="col-md-6">
                                    <img className="story__img" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                              </div>
                        </div>

                  </div>

                  <Footer></Footer>
            </div>
      );
};

export default AboutUs;