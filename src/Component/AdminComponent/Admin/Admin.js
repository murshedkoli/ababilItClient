import React, {  useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';


const Admin = () => {

  const [students, setStudents] = useState([]);
  


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
      background: ' #37517e'
    }}>
      <Header></Header>
      <Sidebar></Sidebar>

      <div style={{ marginLeft: '260px' }}>


        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Admission Date</th>
              <th scope="col">Paid Ammount</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Course</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody >
            {
              students.map((student, index) => <tr>
                <th >{index + 1}</th>
                <th ><img style={{ width: '100px' }} src={student.imgUrl} alt="" /></th>
                <td>{student.name}</td>
                <td>{new Date(student.addmissionDate).toDateString()}</td>
                <td>{student.paymentAmmount}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.course}</td>
                <td><button className="btn btn-outline-success">Update Payment</button></td>
              </tr>)
            }

          </tbody>
        </table>



      </div>

    </div>
  );
};

export default Admin;