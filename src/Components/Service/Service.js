import './Service.css'

const Service = () => {
      return (
            <div className="service__container">
                  <div className="">
                        <h5 className="title">University and college students, learn job-ready skills for free with Coder Hub.<br/>Here are all the services we provide to our users: </h5>
                  </div>
                  {/* Three service card added in home  */}
                  <div className="service__card">
                        <div className='row'>
                              <div className="col-md-4">
                                    <div className="card">
                                          <div className="logo__img">
                                                <img className="logo__image w-25" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/university.png?auto=format%2Ccompress&dpr=1&w=&h=55" alt="" />
                                          </div>
                                          <div className="text__area">
                                                <h4>Learn from top instructors</h4>
                                                <p>Stream on-demand video lectures from leading universities and companies like Yale, Google, IBM, and more.</p>
                                          </div>

                                    </div>
                              </div>
                              <div className="col-md-4">
                                    <div className="card">
                                          <div className="logo__img">
                                                <img className="w-25" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/head.png?auto=format%2Ccompress&dpr=1&w=&h=55" alt="" />
                                          </div>
                                          <div className="text__area">
                                                <h4>Gain skills through hands-on learning</h4>
                                                <p>Learn in-demand skills in data science, design, project management, digital marketing, and more in under two hours with Guided Projects.</p>
                                          </div>

                                    </div>
                              </div>
                              <div className="col-md-4">
                                    <div className="card">
                                          <div className="logo__img">
                                                <img className="w-25" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/certificate.png?auto=format%2Ccompress&dpr=1&w=&h=40" alt="" />
                                          </div>
                                          <div className="text__area">
                                                <h4>Life time excess and Cartification</h4>
                                                <p>The coures in this platform are all free and you can use it anytime. Coder Hub gives us life time excess on all courses</p>
                                          </div>

                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};


export default Service;