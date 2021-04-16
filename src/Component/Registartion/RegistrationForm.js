import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import Form from './Form';


const RegistrationForm = () => {
    const history =useHistory();

    const [imageUrl, setImageUrl] = useState('https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg');

    const [uploadPercentage, setUploadPercentage] = useState(0);

    const [formData, setFormdata] = useState({});

    



    const handleOnBlur = e => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormdata(newData);
    }




    const handleImgUpload = event => {

        const image = event.target.files[0];
        const imagefile = event.target;


        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        if (!allowedExtensions.exec(imagefile.value)) {
            swal({
                title: "Your file is not a photo",
                text: "Select a photo",
                icon: "warning",
                button: "Okay!",
            });

            imagefile.value = "";
        }


        if (image.size > 500000) {
            swal({
                title: "Your file is big",
                text: "Select A small size file!",
                icon: "warning",
                button: "Okay!",

            });
            imagefile.value = "";
        }


        else {
            uploadImage(image)
        }

    }



    const uploadImage = (image) => {

        const imageData = new FormData();
        imageData.set('key', '707ad238025806ece51d9e63679151f7')
        imageData.append('image', image);

        console.log(image)

        const options = {
            onUploadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                let percent = Math.floor((loaded * 100) / total)

                if (percent < 100) {
                    setUploadPercentage(percent)
                }
            }
        }

        axios.post('https://api.imgbb.com/1/upload', imageData, options)
            .then(response => {
                setImageUrl(response.data.data.display_url);
                setUploadPercentage(100, () => {
                    setTimeout(() => {
                        setUploadPercentage(0);
                    }, 1000);
                })
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
            fatherName: formData.fatherName,
            motherName: formData.motherName,
            name: formData.studentName,
            fatherPhoneNumber: formData.fatherPhoneNumber,
            village: formData.village,
            postOffice: formData.postOffice,
            upazila: formData.upazila,
            district: formData.district,
            birthDay: formData.birthDate,
            gender: formData.gender,
            course: formData.selectedCourse
        }

       
        fetch('https://ababil-it-server.herokuapp.com/addstudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(data => {
               
            const PrintInfo = JSON.stringify(studentData)

              sessionStorage.setItem('printInfo', PrintInfo )
              
              history.push('/printapplication')
            
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

    const handlePopUp = (e) => {


        if (formData.studentPhoneNumber.length === 11 || formData.fatherPhoneNumber.length === 11) {
            swal({
                title: `Hey ${formData.studentName} Are you sure?`,
                text: `Submit Application For "${formData.selectedCourse}" Course`,
                icon: "warning",
                buttons: ["Cencel", "Submit"],
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal(`${formData.studentName} Successfully Register for"${formData.selectedCourse}" Course`, {
                            icon: "success",
                            buttons: handleSubmitForm(),
                            
                        });
                    } else {
                        swal("Your Application Not Successfully Submited");
                    }
                });
               

        }
        else {
            swal("Please Give Correct Phone Number!", `Your Phone Number: ${formData.studentPhoneNumber} 
         Or 
         Your Father's Phone Number :${formData.fatherPhoneNumber} are Not Valid. !`, "warning");
        }



        e.preventDefault();
    }



    return (
        <div>
            <div id="regForm" style={{ margin: 'auto' }} className="col-md-5 col-sm-9">

                <Form uploadPercentage={uploadPercentage} handlePopUp={handlePopUp} handleImgUpload={handleImgUpload} imageUrl={imageUrl} handleOnBlur={handleOnBlur}></Form>

            </div>
        </div>
    );
};

export default RegistrationForm;