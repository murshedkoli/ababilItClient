import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem('user'));

    const handleLogOut = () => {
        sessionStorage.clear();
        history.push('/')

    }

    return (
        <div>
            <div class="sidenav">
                <img style={{ borderRadius: '50%', marginLeft: '20px' }} src={user.photoURL} alt="" />
                <Link to="/admin">Studens</Link>
                <Link to="/newapplication">New Application</Link>
                <Link to="/totalpayment">Total Payment Received</Link>
                <Link to="/totalexpense">Total Expense</Link>
                <button onClick={handleLogOut} className="btn btn-outline-danger" style={{ position: 'absolute', bottom: '30px', width: '100%' }}>Logout</button>
            </div>

        </div>
    );
};

export default Sidebar;