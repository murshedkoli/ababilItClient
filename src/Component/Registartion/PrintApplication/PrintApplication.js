import React from 'react';
import './PrintApplication.css'
import PrintFrom from './PrintFrom';

const PrintApplication = () => {

    document.title = "Application From - Ababil It"


    const handlePrint =()=>{
        const btn = document.getElementById("print-btn");
        btn.style.display = "none";
       
        window.print();
       }

    return (
        <div className="container" style={{ padding: '5px', textAlign:'center' }}>
        
         <button id="print-btn" className="btn  btn-success btn-lg btn-block" onClick={handlePrint}>Print Application Copy</button>


            <PrintFrom copy="Student Copy"></PrintFrom>
            <br/>
            
            <PrintFrom copy="Office Copy"></PrintFrom>



        </div>
    );
};

export default PrintApplication;