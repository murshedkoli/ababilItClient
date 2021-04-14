import React from 'react';
import './Hero.css';
import heroImg from '../../../image/hero-img.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>For Better Life...</h1>
              <h2>We are team of talented Mentor making you skilled...</h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
              <Link to="/registration">
              <div class="button_slide slide_right link-text">
              
                Registration Now
               
                </div>
                </Link>
                
                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={heroImg} class="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </section>
    );
};

export default Hero;