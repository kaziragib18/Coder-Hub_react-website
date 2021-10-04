import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Course.css'

const Course = () => {
      const [courses, setCourses] = useState([]);

      useEffect(() => {
            fetch("/courseData.json")
                  .then((res) => res.json())
                  .then((data) => setCourses(data?.courses));
      }, []);

      console.log(courses);

      return (

            <div className="team-container">
                  <div className="all-cards p-3">
                        <NavBar></NavBar>
                        <h4 className="pt-5">Take the next step toward your personal and professional goals with Coder Hub.See all the courses we provide that will help you enhance you programming skill and knowledge.</h4>
                  </div>
                  <div className="cards">
                        <div className='row'>
                              {courses?.map((course) => (
                                    <div className="col-md-4">
                                          <div className="cart">
                                                <div className="logo-image rounded">
                                                      <img className="w-50" src={course.img} alt="" />
                                                </div><hr />
                                                <div className="text-area p-2">
                                                      <h5>{course.name}</h5>
                                                      <hr />
                                                      <p>{course.info}</p>
                                                      <hr />
                                                      <h6>{course.type}</h6>
                                                      <hr />
                                                      <h6>{course.level}</h6>
                                                
                                                </div>

                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};


export default Course;