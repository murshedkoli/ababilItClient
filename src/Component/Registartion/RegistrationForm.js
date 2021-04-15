import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import Form from './Form';


const RegistrationForm = () => {

    const [imageUrl, setImageUrl] = useState('');

    const [formData, setFormdata] = useState({});

    const [successfull, setSuccessfull] = useState(true);



    const handleOnBlur = e => {
        const newData = { ...formData };
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


    const handleSubmitForm = (e) => {
        const studentData = {
            paymentAmmount: 0,
            applicationDate: new Date(),
            imgUrl: imageUrl,
            addmissionDate: '',
            confirmAddmission: false,
            phoneNumber: formData.studentPhoneNumber,
            faterName: formData.faterName,
            motherName: formData.motherName,
            name: formData.studentName,
            fatherPhoneNumber: formData.fatherPhoneNumber,
            village: formData.village,
            postOffice: formData.postOffice,
            upazila: formData.upazila,
            district: formData.district,
            birthDay: formData.birthDate,
            gender: formData.gender,
            password: formData.password,
            course: formData.selectedCourse
        }

        console.log(studentData)
        fetch('https://ababil-it-server.herokuapp.com/addstudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedCount > 0) {
                   
                    setSuccessfull(false)
                } else {

                    setSuccessfull(true)
                }
            })

      

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

const handlePopUp =(e)=>{


    swal({
        title: "Are you sure?",
        text: `Submit Application "${formData.selectedCourse}" Course`,
        icon: "warning",
        buttons:  ["Cencel","Submit"] ,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal(`You Successfully Register for"${formData.selectedCourse}" Course`, {
                    icon: "success",
                    buttons:handleSubmitForm(),
                });
            } else {
                swal("Your Application Not Successfully Submited");
            }
        });
        e.preventDefault();
}

    

    return (
        <div style={{ margin: 'auto' }} className="col-md-5 col-sm-9">

        <Form handlePopUp={handlePopUp} handleImgUpload={handleImgUpload} handleOnBlur={handleOnBlur}></Form>

        </div>
    );
};

export default RegistrationForm;