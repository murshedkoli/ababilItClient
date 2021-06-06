import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import AddExpense from './AddExpense';

const TotalExpense = () => {



    document.title = "Admin Page - Ababil Information Technology"

    const [expenses, setExpenses] = useState([]);

    const [reload, setReload] = useState(false);



    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://ababil-it-server.herokuapp.com/students')
            .then(res => res.json())
            .then(data => {

                setStudents(data)

            })
    }, [])


    const totalPayment = () => {
        const total = students.reduce((total, student) => total + student.paymentAmmount, 0);
        return total;

    }


    useEffect(() => {
        //https://ababil-it-server.herokuapp.com
        fetch('https://ababil-it-server.herokuapp.com/expenses')
            .then(res => res.json())
            .then(data => {

                setExpenses(data.reverse())

            })
    }, [reload])


    const TotalExpenseAmmount = () => {
        const total = expenses.reduce((total, expense) => total + expense.ammount, 0);
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
                    <h4>Total In Hand : {totalPayment() - TotalExpenseAmmount()}</h4>
                    <AddExpense reload={reload} setReload={setReload} />
                    <table class="table table-dark">

                        <thead>
                            <tr>
                                <th scope="col">Expense Date</th>
                                <th scope="col">Paid By </th>
                                <th scope="col">Purpose </th>
                                <th scope="col">Received By </th>
                                <th scope="col"> Ammount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                expenses.map((expense, index) => <tr>
                                    <th >{new Date(expense.date).toDateString()}</th>
                                    <td>{expense.name}</td>
                                    <td>{expense.purpose}</td>
                                    <td>{expense.receiver}</td>
                                    <td>{expense.ammount} Taka</td>
                                </tr>)


                            }


                        </tbody>

                        <thead>
                            <tr>

                                <th colspan="4">Total Expense</th>
                                <th colspan="1">{TotalExpenseAmmount()} Taka</th>
                            </tr>
                        </thead>

                    </table>



                </div>

            </div>
        </div>
    );
};

export default TotalExpense;