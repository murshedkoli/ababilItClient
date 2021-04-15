import React from 'react';
import Footer from '../../Footer/Footer';
import Course from '../Course/Course';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './Home.css'

const Home = () => {

    document.title = "Home Page - Ababil Information Technology"


    return (
        <div className="homediv">
                <Header/>
                <Hero/>
                <Course/>
                <Footer/>
        </div>
    );
};

export default Home;