import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { mainUser } from '../../../App';



const AdminLogin = () => {


let history = useHistory();

const [loggedInUser, setLoggedInUser] =  useContext(mainUser);


  


const [loginformData, setLoginFormData] = useState({});


const handleOnBlur = e=>{
    const newData = {...loginformData};
    newData[e.target.name] = e.target.value;
    setLoginFormData(newData);
}


const handleLoginSubmit =(e)=>{

    fetch('http://localhost:5000/admin/login', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(loginformData)
            })
            .then(res => res.json())
            .then(data => {
                setLoggedInUser(data)
                sessionStorage.setItem('email', data.email);
                history.push('/admin')
            })
    e.preventDefault();
}


    return (
        <div style={{ margin:'70px auto'}} className="col-md-4 col-sm-9">
           
            {
                loggedInUser.email ? <div> <h1>{loggedInUser.Name} you are Logged In Now....</h1></div>:
                <form onSubmit={handleLoginSubmit} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleOnBlur} type="email" class="form-control " name="email" id="exampleInputEmail1"  placeholder="Enter email" required/>
                       
                    </div><br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onBlur={handleOnBlur} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        </div><br/>
                        
                         <button style={{width:'100%'}} type="submit" class="btn btn-outline-primary">Login</button>
                    </form>
            }


         </div>
    );
};

export default AdminLogin;