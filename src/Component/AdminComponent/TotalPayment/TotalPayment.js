import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const TotalPayment = () => {



    document.title = "Admin Page - Ababil Information Technology"

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://ababil-it-server.herokuapp.com/students')
            .then(res => res.json())
            .then(data => {

                setStudents(data)

            })
    }, [])


const totalPayment =()=>{
   const total = students.reduce((total, student)=> total+student.paymentAmmount, 0);
   return total;

}


    return (
        <div>
            <div style={{
                width: '100%',
                height: '100vh',
                background: ' #37517e'
            }}>
                <Header></Header>
                <Sidebar></Sidebar>

                <div style={{ marginLeft: '260px' }}>

                    <table class="table table-dark">

                        <thead>
                            <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Course</th>
                                <th scope="col">Paid Ammount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                students.map((student, index) => <tr>
                                    <th >{index + 1}</th>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td>{student.paymentAmmount} Taka</td>
                                </tr>)


                            }

                            
                        </tbody>

                        <thead>
                                <tr>
                                    
                                    <th colspan="3">Total Payment</th>
                                    <th colspan="1">{totalPayment()}</th>
                                </tr>
                            </thead>

                    </table>



                </div>

            </div>
        </div>
    );
};

export default TotalPayment;