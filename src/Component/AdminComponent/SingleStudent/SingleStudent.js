import React from 'react';

const SingleStudent = ({ student }) => {
    console.log(student)
    return (


        <>
            <img className="card-img-top" style={{ height: '250px', width: '240px', margin: 'auto' }} src={student.imgUrl} alt="" />
            <div class="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="btn btn-outline-primary">{student.course}</p>
                <p className="btn btn-success">Admission : {new Date(student.applicationDate).toDateString()}</p>
            </div>
        </>

    );
};

export default SingleStudent;