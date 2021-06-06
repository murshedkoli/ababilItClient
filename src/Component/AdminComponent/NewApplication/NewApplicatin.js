import React, { useEffect, useState } from 'react';
import ConfirmStudent from '../../ConfimStudent/ConfirmStudent';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';


const NewApplication = () => {

  document.title = "New Student Application - Ababil Information Technology"

  const [students, setStudents] = useState([]);
  console.log(students)

  const [notification, setNotification] = useState({
    update: '',
    failed: ''
  })

  useEffect(() => {
    fetch('https://ababil-it-server.herokuapp.com/studentsapply')
      .then(res => res.json())
      .then(data => {

        setStudents(data.reverse())

      })
  }, [notification])



  return (
    <div style={{
      width: '100%',
      height: '100vh',
      background: ' #37517e'
    }}>
      <Header></Header>
      <Sidebar></Sidebar>

      <div style={{ marginLeft: '260px' }}>
        <h1 style={{ color: 'green', textAlign: 'center' }}>{notification.update}</h1>
        <h1 style={{ color: 'red', textAlign: 'center' }}>{notification.failed}</h1>
        <ConfirmStudent students={students} setNotification={setNotification} notification={notification} ></ConfirmStudent>


      </div>

    </div>
  );
};

export default NewApplication;