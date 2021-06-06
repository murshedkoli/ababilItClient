import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const user = JSON.parse(sessionStorage.getItem('user'));


  const [menuOn, setMenuOn] = useState(false)

  return (

    <header id="header" >
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto abbb"><Link to="/">Ababil IT</Link></h1>
        <nav id="navbar" class="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/publicstudents">Students</Link></li>
            <li><Link>Contact</Link></li>

            <li><Link to="/registration">Get Admission</Link></li>
            {
              user && <li><Link to="/admin">{user.displayName}</Link></li>
            }
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <nav id="navbar" class="mobile-nav">
          <button onClick={() => setMenuOn(!menuOn)}>Menu<i class="fas fa-caret-square-down"></i>

          </button>
          <span class="logo me-auto "><Link to="/">Ababil IT</Link></span>
          {
            menuOn && <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/publicstudents">Students</Link></li>
              <li><Link>Contact</Link></li>

              <li><Link to="/registration">Get Admission</Link></li>
              {
                user && <li><Link to="/admin">{user.displayName}</Link></li>
              }
            </ul>
          }
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </header>
  );
};

export default Header;