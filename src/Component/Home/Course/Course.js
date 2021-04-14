import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = () => {
    return (
        <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Courses</h2>
            <p> Here is the Courses we Provide, You can come here to get Quality Training.</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="box">
                <h3>Computer Office Application</h3>
                <h4><sup>৳</sup>2000<span>per month</span></h4>
                <ul>
                  <li><i class="bx bx-check"></i> Microsoft Word</li>
                  <li><i class="bx bx-check"></i> Microsoft Excel</li>
                  <li><i class="bx bx-check"></i> Microsoft PowerPoint</li>
                  <li><i class="bx bx-x"></i> Basic Photoshop</li>
                  <li><i class="bx bx-x"></i> Software Installation</li>
                  <li><i class="bx bx-x"></i> Internet, Email</li>
                </ul>
                <button class="btn btn-outline-success p-3"><Link to="/registration">Registartion Now</Link></button>
              </div>
            </div>
  
            <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
              <div class="box featured">
                <h3>Web Design</h3>
                <h4><sup>৳</sup>4000<span>per month</span></h4>
                <ul>
                  <li><i class="bx bx-check"></i> HTML</li>
                  <li><i class="bx bx-check"></i> CSS</li>
                  <li><i class="bx bx-check"></i> Bootstrap</li>
                  <li><i class="bx bx-check"></i> Wordpress</li>
                  <li><i class="bx bx-check"></i> MySql Database</li>
                  <li><i class="bx bx-check"></i> Domain, Hosting</li>
                </ul>
                <button class="btn btn-outline-success p-3"><Link to="/registration">Registartion Now</Link></button>
              </div>
            </div>
  
            <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
              <div class="box">
                <h3>Graphics Design</h3>
                <h4><sup>৳</sup>3000<span>per month</span></h4>
                <ul>
                  <li><i class="bx bx-check"></i> Adobe Photoshop CS</li>
                  <li><i class="bx bx-check"></i> Adobe Photoshop CC</li>
                  <li><i class="bx bx-check"></i> Adobe Illustrator 10</li>
                  <li><i class="bx bx-check"></i> Adobe Illustartor CC</li>
                  <li><i class="bx bx-check"></i> Freelancer Account</li>
                  <li><i class="bx bx-check"></i> Contest In Freelancer</li>
                </ul>
                <button class="btn btn-outline-success p-3"><Link to="/registration">Registartion Now</Link></button>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );
};

export default Course;