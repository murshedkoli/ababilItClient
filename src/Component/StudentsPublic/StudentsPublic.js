import React, { useEffect, useState } from 'react';
import SingleStudent from '../AdminComponent/SingleStudent/SingleStudent';
import Header from '../Home/Header/Header';

const StudentsPublic = () => {

    
const [students, setStudents] = useState([]);
console.log(students)


  useEffect(() => {
    fetch('https://ababil-it-server.herokuapp.com/students')
      .then(res => res.json())
      .then(data => {

        setStudents(data)
 
      })
  }, [])



    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: '#37517e'
          }}>
            <Header></Header>
            <h1 style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Admited Students</h1>
            <div className="d-flex p-5">
            {
                students.map(std=> <SingleStudent student={std}></SingleStudent>)
            }
            </div>
        </div>
    );
};

export default StudentsPublic;