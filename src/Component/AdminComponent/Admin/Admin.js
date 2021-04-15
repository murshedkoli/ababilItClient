import React, {  useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2'


const Admin = () => {

  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    fetch('https://ababil-it-server.herokuapp.com/students')
      .then(res => res.json())
      .then(data => {

        setStudents(data)

      })
  }, [])


  
  const submitAddmission = (id, paidAmount) => {

    console.log(id)
    const dataForSubmission ={
     ammount : paidAmount,
    }

     fetch(`https://ababil-it-server.herokuapp.com/confirm/${id}`, {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(dataForSubmission)
     })
         .then(res => res.json())
         .then(data => {
             if (data.modifiedCount > 0) {
               
             } else {
              
             }

         })
       
 }


 const handlConfirm= (id, oldPayment, name)=>{


  Swal.fire({
      title: 'Update Payment',
      html: `<input type="number" id="paidAmmount" class="swal2-input" placeholder="Paid Ammount">`,
      confirmButtonText: 'Confirm Payment',
      focusConfirm: true,
      
      preConfirm: () => {
        const ammount = Swal.getPopup().querySelector('#paidAmmount').value
        if (ammount<0) {
          Swal.showValidationMessage(`Please enter Valid Paid Ammount`)
        }
       
       const paidAmount=parseInt(ammount)+parseInt(oldPayment);
       submitAddmission(id, paidAmount)
       return { ammount: ammount, total:paidAmount}
      }
    }).then((result) => {
     
      Swal.fire(`
        ${name}'s Payment ${result.value.ammount} Was Added Successfully;
        
        Total Payment is : ${result.value.total}`
        .trim())
    })


}
 



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
                <td><button onClick={()=> handlConfirm(student._id, student.paymentAmmount, student.name)} className="btn btn-outline-success">Update Payment</button></td>
              </tr>)
            }

          </tbody>
        </table>



      </div>

    </div>
  );
};

export default Admin;