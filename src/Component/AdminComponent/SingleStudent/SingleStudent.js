import React from 'react';

const SingleStudent = ({ student }) => {
    console.log(student)
    return (
      
            <div className="card p-3 m-3" style={{width: '18rem'}}>
                <img className="card-img-top" src={student.imgUrl} alt=""/>
                    <div class="card-body">
                        <h5 className="card-title">{student.name}</h5>
                        <p className="btn btn-outline-primary">Course : {student.course}</p>
                        <p className="btn btn-success">Admission Date : {new Date(student.applicationDate).toDateString()}</p>
                    </div>
                </div>          

    );
};

export default SingleStudent;