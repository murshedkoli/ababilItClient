import React from 'react';
import Footer from '../Footer/Footer';
import Course from '../Home/Course/Course';

import Header from '../Home/Header/Header';
const Courses = () => {

    document.title = "All Courses - Ababil Information Technology"

    return (
        <div style={{
            width: '100%',
            height: '10vh',
            background: '#37517e'
          }}>
            <Header></Header>
           
            <Course></Course>
            <Footer></Footer>
            
        </div>
    );
};

export default Courses;