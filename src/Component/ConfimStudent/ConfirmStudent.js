import React, { useState } from 'react';
import Swal from 'sweetalert2'


const ConfirmStudent = ({ students, setNotification, notification }) => {
    const [formData, setFormdata] = useState({
        paidAmount:0
    });



    const submitAddmission = (id) => {

       const dataForSubmission ={
        date:new Date(),
        ammount : formData.paidAmount,
       }

        fetch(`https://ababil-it-server.herokuapp.com/confirm/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForSubmission)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newnote = { ...notification };
                    newnote.update = "Confirm Request Successful";
                    newnote.failed = "";
                    setNotification(newnote);
                } else {
                    const newnote = { ...notification };
                    newnote.update = "";
                    newnote.failed = "Confirm Request Not Successful";
                    setNotification(newnote);
                }

            })
          
    }

const handlConfirm= id=>{
  

    Swal.fire({
        title: 'Confirm Addmission',
        html: `<input type="number" id="paidAmmount" class="swal2-input" placeholder="Paid Ammount">`,
        confirmButtonText: 'Confirm Addmission',
        focusConfirm: true,
        
        preConfirm: () => {
          const ammount = Swal.getPopup().querySelector('#paidAmmount').value
          if (!ammount) {
            Swal.showValidationMessage(`Please enter Paid Ammount`)
          }
          submitAddmission(id)
         const newdata = {...formData}
         newdata.paidAmount=ammount;
         setFormdata(newdata);
        }
      })
  

}
    

    return (
        <div>
 
            <table class="table">

                <thead>
                    <tr>
                        <th scope="col">Sl No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Application Date</th>
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
                            <td>{new Date(student.applicationDate).toDateString()}</td>

                            <td>{student.phoneNumber}</td>
                            <td>{student.course}</td>
                            <td><button onClick={() => handlConfirm(student._id)} className="btn btn-outline-success">Confirm</button></td>
                        </tr>)


                    }



                </tbody>

            </table>
          

        </div>
    );
};

export default ConfirmStudent;