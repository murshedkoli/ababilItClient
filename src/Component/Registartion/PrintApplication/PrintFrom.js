import React from 'react';
import logo from '../../../image/logo.png';
import './PrintApplication.css'

const PrintFrom = ({ copy }) => {

    const infoForPrint = JSON.parse(sessionStorage.getItem('printInfo'));

    const {
        applicationDate,
        imgUrl,
        phoneNumber,
        fatherName,
        motherName,
        name,
        fatherPhoneNumber,
        village,
        postOffice,
        upazila,
        district,
        birthDay,
        gender,
        course } = infoForPrint;





    return (
        <div className="d-flex justify-content-center">
            <div style={{ border: '1px solid black', width: '700px' }} className="row">

                <div className="col-9 " >
                    <div className="d-flex" >
                        <div className="col-2 " >
                            <img className="img-fluid" src={logo} alt="" />
                        </div>
                        <div className="col-10 text-center">
                            <p style={{ fontSize: '25px', textTransform: 'uppercase', marginBottom: '1px' }}>Ababil It</p>
                            <p>Computer Training and Web Design Center</p>
                        </div>
                    </div>

                    <div >
                        <table class="table table-bordered table-sm" style={{ marginTop: '1px', marginBottom: '1px', textAlign: 'left' }}>

                            <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td >{name}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Father's Name:</th>
                                    <td >{fatherName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mother's Name:</th>
                                    <td >{motherName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mobile Number:</th>
                                    <td >{phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Father's Phone Number:</th>
                                    <td >{fatherPhoneNumber}</td>

                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered table-sm" style={{ marginTop: '1px', marginBottom: '1px' }}>

                            <tbody>
                                <tr>
                                    <th scope="row">Date of Birth:</th>
                                    <td >{new Date(birthDay).toDateString()}</td>
                                    <th scope="row">Gender:</th>
                                    <td >{gender}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>



                </div>
                <div className="col-3 text-center" style={{ padding: '2px' }}>
                    <div style={{ border: '1px solid black', padding: '2px' }}>
                        <p>{copy}</p>
                        <img style={{ height: '150px', width: '150px' }} className="img-fluid" src={imgUrl} alt="" />
                        <div style={{ width: '100%', height: '50px', border: '1px solid black', marginTop: '3px' }}></div>
                    </div>
                </div>

                <div >
                    <div >
                        <table class="table table-bordered table-sm" style={{ marginTop: '1px', marginBottom: '1px' }}>

                            <tbody>
                                <tr>
                                    <th scope="row">Vill:</th>
                                    <td >{village}</td>
                                    <th scope="row">Post:</th>
                                    <td >{postOffice}</td>
                                    <th scope="row">Upazila:</th>
                                    <td >{upazila}</td>
                                    <th scope="row">District:</th>
                                    <td >{district}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>


                    <div >
                        <table class="table table-bordered table-sm" style={{ marginTop: '1px', marginBottom: '1px' }}>

                            <tbody>
                                <tr>
                                    <th scope="row">Course Name:</th>
                                    <td >{course}</td>
                                    <th scope="row">Duration:</th>
                                    <td >6 Month</td>


                                </tr>
                                <tr>

                                    <th scope="row">Fee:</th>
                                    <td >6000 Taka</td>

                                    <th scope="row">Application Date</th>
                                    <td >{new Date(applicationDate).toDateString()}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-9 ">

                        <div >
                            <table class="table table-bordered table-sm" style={{ textAlign: 'left' }}>

                                <tbody>
                                    <tr>
                                        <th scope="row">Payment :</th>

                                        <th scope="row">Due:</th>


                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-3 p-1">
                        <div style={{ width: '100%', height: '100%', border: '1px solid black' }}></div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default PrintFrom;