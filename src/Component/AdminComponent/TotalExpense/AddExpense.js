import React, { useState } from 'react';
import swal from 'sweetalert';

const AddExpense = ({ setReload, reload }) => {


    const [formData, setFormData] = useState({});


    const onBlurInput = (e) => {
        const oldData = { ...formData };
        oldData[e.target.name] = e.target.value;
        setFormData(oldData);
    }


    const submitFormData = (e) => {

        const expenseData = {
            name: formData.name,
            purpose: formData.purpose,
            ammount: parseInt(formData.ammount),
            date: formData.date,
            receiver: formData.receiver
        }
        //https://ababil-it-server.herokuapp.com

        fetch('https://ababil-it-server.herokuapp.com/addexpense', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(expenseData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedCount) {
                    swal("Good job!", "Expense Added Succesfully!", "success");
                    setReload(!reload)

                } else {
                    swal("Oh!", "You Failed to add Expense!", "warning");


                }

            })

        e.preventDefault();

    }





    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={submitFormData}>
                <input onBlur={onBlurInput} type="text" name="name" placeholder="Paid By" />
                <input onBlur={onBlurInput} type="text" name="purpose" placeholder="Purpose Of Expense" />
                <input onBlur={onBlurInput} type="number" name="ammount" placeholder="Ammount" />
                <input onBlur={onBlurInput} type="text" name="receiver" placeholder="Received By" />
                <input onBlur={onBlurInput} type="date" name="date" />
                <input type="submit" value="Add Expense" />
            </form>
        </div>
    );
};

export default AddExpense;