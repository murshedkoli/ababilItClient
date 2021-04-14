import React, { useState } from 'react';

const ConfirmStudent = ({ students, setNotification, notification }) => {
    const [formData, setFormdata] = useState({});

    const [studentId, setStudentId] = useState('');
    console.log(studentId)

    const handleOnBlur = e =>{
        const newData = {...formData};
        newData[e.target.name] = e.target.value;
        setFormdata(newData);
    }


    const submitAddmission = (id, e) => {

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
            e.preventDefault();
    }

const handlConfirm= id=>{
    setStudentId(id)
    const form = document.getElementById('confirmForm');
    form.style.display= 'block';
}
    

const inputStyle = {
    padding:'10px 2px',
    marginRight:'10px',
    width:'45%',
    borderRadius:'10px'
}
    return (
        <div>
  {
                <form onSubmit={()=>submitAddmission(studentId)} style={{padding:'20px', display:'none'}} id="confirmForm">
                    <input onBlur={handleOnBlur} style={inputStyle} type="number" className="" name="paidAmount" id="" placeholder="Payment Ammount" required/>
                  
                    <button style={inputStyle}  type="submit">Confirm Addmission</button>
                </form>
            }
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