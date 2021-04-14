import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Home/Header/Header';
import AdminLogin from './AdminLogin';



const AdminLoginPage = () => {
    return (
        <div style={{
            width: '100%',
            height: '60vh',
            background: '#37517e'
          }}>
            <Header></Header>
            <AdminLogin></AdminLogin>
            <Footer></Footer>
        </div>
    );
};

export default AdminLoginPage;