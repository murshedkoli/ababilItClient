import React, { useEffect, useState } from 'react';
import SingleStudent from '../AdminComponent/SingleStudent/SingleStudent';
import Header from '../Home/Header/Header';

const StudentsPublic = () => {


  document.title = "Admitted Student's - Ababil Information Technology"

  const [students, setStudents] = useState([]);


  useEffect(() => {
    fetch('https://ababil-it-server.herokuapp.com/students')
      .then(res => res.json())
      .then(data => {

        setStudents(data.reverse())

      })
  }, [])



  return (
    <div style={{
      minWidth: '100vh',
      minHeight: '100vh',
      background: '#37517e'
    }}>
      <Header></Header>
      <h1 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Admited Students</h1>
      <div className="d-flex p-5" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          students.map(std =>
            <div className="card p-1 m-1 col-3" style={{ width: '280px' }}>
              <SingleStudent student={std}></SingleStudent>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default StudentsPublic;