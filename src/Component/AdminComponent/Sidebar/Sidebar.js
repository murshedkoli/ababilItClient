import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div class="sidenav">

                <Link to="/admin">Studens</Link>
                <Link to="/newapplication">New Application</Link>
                <Link>Total Payment Received</Link>
                <Link>Add Payment</Link>
              
            </div>
        </div>
    );
};

export default Sidebar;