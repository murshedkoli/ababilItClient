import axios from 'axios';
import React, { useState } from 'react';

const RegistrationForm = () => {

const [imageUrl, setImageUrl] = useState('');

const [formData, setFormdata] = useState({});

const [successfull, setSuccessfull] = useState(true);

const [status, setStatus] = useState({
    success:'',
    failed: ''
})

const handleOnBlur = e =>{
    const newData = {...formData};
    newData[e.target.name] = e.target.value;
    setFormdata(newData);
}



const handleImgUpload = event => {
    const imageData = new FormData();
    imageData.set('key', '707ad238025806ece51d9e63679151f7')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(response => {
            setImageUrl(response.data.data.display_url);
            
        })
        .catch(err => {
            console.log(err);
        });
}



const handleSubmitForm =(e)=>{
    const studentData ={
    paymentAmmount : 0,
    applicationDate : new Date(),
    imgUrl : imageUrl,
    addmissionDate : '',
    confirmAddmission : false,
    phoneNumber:formData.studentPhoneNumber,
    faterName: formData.faterName,
    motherName:formData.motherName,
    name:formData.studentName,
    fatherPhoneNumber: formData.fatherPhoneNumber,
    village:formData.village,
    postOffice: formData.postOffice,
    upazila: formData.upazila,
    district: formData.district,
    birthDay: formData.birthDate,
    gender: formData.gender,
    password: formData.password,
    course:formData.selectedCourse
    }

    console.log(studentData)
    fetch('https://ababil-it-server.herokuapp.com/addstudent', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(studentData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       if(data.insertedCount > 0){
           const newStatus = {...status};
            newStatus.success="Your Application Successfully Submited";
            newStatus.failed = "";
            setStatus(newStatus);
            setSuccessfull(false)
       }else{
        const newStatus = {...status};
        newStatus.success="";
        newStatus.failed = "Your Application Failed Please Try Again";
        setStatus(newStatus);
        setSuccessfull(true)
       }
    })
    
    e.preventDefault();

}

// const admin ={
//     Name: 'Murshed Al Main',
//     email: 'murshedkoli@gmail.com',
//     password:'Murshed@@@k5'
// };

// fetch('https://ababil-it-server.herokuapp.com/admin', {
//         method:'POST',
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify(admin)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))


    return (
        <div style={{ margin: 'auto'}} className="col-md-5 col-sm-9">

            <h1 style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Registraion For Course</h1>

                <p style={{color:'green'}}>{status.success}</p>
                <p style={{color:'red'}}>{status.failed}</p>
           {
               successfull &&  
               <form onSubmit={handleSubmitForm}  style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>

               <select onBlur={handleOnBlur} class="form-select" aria-label="Default select example" name="selectedCourse" required>
                   <option selected>Select Your Course</option>
                   <option value="Computer Office Application">Computer Office Application</option>
                   <option value="Graphics Design">Graphics Design</option>
                   <option value="Web Design">Web Design</option>
               </select>

               <div class="mb-3">
                   <label class="form-label">Student's Name</label>
                   <input onBlur={handleOnBlur} type="text" class="form-control" name="studentName" placeholder="Your Name" required/>
               </div>
               <div class="mb-3">
                   <label class="form-label">Student's Phone Number</label>
                   <input onBlur={handleOnBlur} type="number" class="form-control" name="studentPhoneNumber" placeholder="Your Phone Number" required/>
               </div>

               <div className="row">
                   <div class="mb-3 col">
                       <label class="form-label">Father's Name</label>
                       <input onBlur={handleOnBlur} type="text" class="form-control" name="fatherName" placeholder="Father's Name" required/>
                   </div>

                   <div class="mb-3 col">
                       <label class="form-label">Father's Phone Number</label>
                       <input onBlur={handleOnBlur} type="number" class="form-control" name="fatherPhoneNumber" placeholder="Father's Phone Number" required/>
                   </div>
               </div>

               <div class="mb-3">
                   <label class="form-label">Mother's Name</label>
                   <input onBlur={handleOnBlur} type="text" class="form-control" name="motherName" placeholder="Mother's Name" required/>
               </div>
               <div className="row">
                   <div class="mb-3 col">
                       <label class="form-label">Village</label>
                       <input onBlur={handleOnBlur} type="text" class="form-control" name="village"  placeholder="Village" required/>
                   </div>
                   <div class="mb-3 col ">
                       <label class="form-label">Post Office</label>
                       <input onBlur={handleOnBlur} type="text" class="form-control" name="postOffice" placeholder="Post Office" required/>
                   </div>
               </div>
               <div className="row">
                   <div class="mb-3 col">
                       <label class="form-label">Upazila</label>
                       <input onBlur={handleOnBlur} type="text" class="form-control" name="upazila" placeholder="Upazila" required/>
                   </div>
                   <div class="mb-3 col">
                       <label class="form-label">District</label>
                       <input onBlur={handleOnBlur} type="text" class="form-control" name="district" placeholder="District" required/>
                   </div>
               </div>

               <div className="row">
                   <div className="col">
                       <label  class="form-label">Select Your Date Of Birth</label>

                       <input onBlur={handleOnBlur} type="date" className="form-control" name="birthDate" id="" /><br/>
                   </div>

                   <div className="row col">
                       <div class="form-check col">
                           <input onBlur={handleOnBlur} class="form-check-input" type="radio" name="gender" id="male" value="male"  required/>
                           <label class="form-check-label" for="male">
                               Male
               </label>
                       </div>
                       <div class="form-check col">
                           <input onBlur={handleOnBlur} class="form-check-input" type="radio" id="female" name="gender" value="female" required/>
                           <label class="form-check-label" for="female" >
                               Female
                       </label>
                       </div>
                   </div>
               </div>
               <div class="mb-3">
                   <label for="photo" class="form-label">Upload Your Photo</label>
                   <input type="file" class="form-control-file" id="photo" onChange={handleImgUpload} required/>
               </div>


               <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Password</label>
                   <input onBlur={handleOnBlur} type="password" password="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
               </div>

               <button style={{width:'100%'}} type="submit" class="btn btn-lg btn-success">Registration</button>
           </form>

           }

        </div>
    );
};

export default RegistrationForm;