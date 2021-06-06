import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import AddExpense from './AddExpense';

const TotalExpense = () => {



    document.title = "Admin Page - Ababil Information Technology"

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        //https://ababil-it-server.herokuapp.com
        fetch('https://ababil-it-server.herokuapp.com/expenses')
            .then(res => res.json())
            .then(data => {

                setExpenses(data)
                console.log(data)


            })
    }, [])


    const totalPayment = () => {
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
                    <AddExpense />
                    <table class="table table-dark">

                        <thead>
                            <tr>
                                <th scope="col">Expense Date</th>
                                <th scope="col">Name </th>
                                <th scope="col">Purpose </th>
                                <th scope="col"> Ammount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                expenses.map((expense, index) => <tr>
                                    <th >{new Date().toDateString(expense.date)}</th>
                                    <td>{expense.name}</td>
                                    <td>{expense.purpose}</td>
                                    <td>{expense.ammount} Taka</td>
                                </tr>)


                            }


                        </tbody>

                        <thead>
                            <tr>

                                <th colspan="3">Total Expense</th>
                                <th colspan="1">{totalPayment()} Taka</th>
                            </tr>
                        </thead>

                    </table>



                </div>

            </div>
        </div>
    );
};

export default TotalExpense;