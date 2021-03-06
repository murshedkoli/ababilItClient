import React, { useContext } from 'react';
import { mainUser } from '../../App';
import Header from '../Home/Header/Header';
import RegistrationForm from './RegistrationForm';

const Registration = () => {
    document.title = "Registartion Page - Ababil It"

const [loggedInUser] = useContext(mainUser);

    return (
        <div style={{
            width: '100%',
            height: '1200px',
            background: '#37517e'
          }}>
                <Header></Header>
                {
                    !loggedInUser.email && <RegistrationForm></RegistrationForm>
                }
        </div>
    );
};

export default Registration;