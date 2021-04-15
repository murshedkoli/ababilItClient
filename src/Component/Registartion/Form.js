import React from 'react';
import './Form.css'

const Form = ({ handleImgUpload, handleOnBlur, handlePopUp, imageUrl, uploadPercentage }) => {



    return (
        <div>
            <h1 style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Registraion For Course</h1>

            <form name="registrationForm" onSubmit={handlePopUp} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>

                <select onBlur={handleOnBlur} class="form-select" aria-label="Default select example" name="selectedCourse" required>
                    <option selected>Select Your Course</option>
                    <option value="Computer Office Application">Computer Office Application</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Web Design">Web Design</option>
                </select>

                <div class="mb-3">
                    <label class="form-label">Student's Name</label>
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="studentName" placeholder="Your Name" required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Student's Phone Number</label>
                    <input onBlur={handleOnBlur} type="number" class="form-control" name="studentPhoneNumber" placeholder="Your Phone Number" required />
                </div>

                <div className="row">
                    <div class="mb-3 col">
                        <label class="form-label">Father's Name</label>
                        <input onBlur={handleOnBlur} type="text" class="form-control" name="fatherName" placeholder="Father's Name" required />
                    </div>

                    <div class="mb-3 col">
                        <label class="form-label">Father's Phone Number</label>
                        <input onBlur={handleOnBlur} type="number" class="form-control" name="fatherPhoneNumber" placeholder="Father's Phone Number" required />
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Mother's Name</label>
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="motherName" placeholder="Mother's Name" required />
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label class="form-label">Village</label>
                        <input onBlur={handleOnBlur} type="text" class="form-control" name="village" placeholder="Village" required />
                    </div>
                    <div class="mb-3 col ">
                        <label class="form-label">Post Office</label>
                        <input onBlur={handleOnBlur} type="text" class="form-control" name="postOffice" placeholder="Post Office" required />
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label class="form-label">Upazila</label>
                        <input onBlur={handleOnBlur} type="text" class="form-control" name="upazila" placeholder="Upazila" required />
                    </div>
                    <div class="mb-3 col">
                        <label class="form-label">District</label>
                        <input onBlur={handleOnBlur} type="text" class="form-control" name="district" placeholder="District" required />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label class="form-label">Select Your Date Of Birth</label>

                        <input onBlur={handleOnBlur} type="date" className="form-control" name="birthDate" id="" /><br />
                    </div>

                    <div className="row col">
                        <div class="form-check col">
                            <input onBlur={handleOnBlur} class="form-check-input" type="radio" name="gender" id="male" value="male" required />
                            <label class="form-check-label" for="male">
                                Male
</label>
                        </div>
                        <div class="form-check col">
                            <input onBlur={handleOnBlur} class="form-check-input" type="radio" id="female" name="gender" value="female" required />
                            <label class="form-check-label" for="female" >
                                Female
        </label>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '10px' }}>
                    <img className={(uploadPercentage>60? 'green':'red')} style={{ width: '200px', padding: '2px',  } } src={imageUrl} alt="" />
                </div>
                <div class="mb-3">
                    <label for="photo" class="form-label">Upload Your Photo</label>
                    <input type="file" class="form-control-file" id="photo" name="photoupload" onChange={handleImgUpload} />
                </div>
              {
                  uploadPercentage>0 &&   
                  <div class="progress" style={{marginBottom:'15px'}}>
                  <div class={"progress-bar progress-bar-striped "+(uploadPercentage>80? 'bg-success':'bg-danger')} role="progressbar" style={{width:uploadPercentage+'%'}} aria-valuenow={uploadPercentage} aria-valuemin="0" aria-valuemax="100">{uploadPercentage}%</div>
                  <br/><br/>
              </div>
              }

                {/* <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Password</label>
         <input onBlur={handleOnBlur} type="password" password="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
     </div> */}

                <button style={{ width: '100%' }} type="submit" class="btn btn-lg btn-success">Registration</button>
            </form>
        </div>
    );
};

export default Form;