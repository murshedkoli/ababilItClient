import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { mainUser } from '../../../App';



const AdminLogin = () => {


let history = useHistory();

const [loggedInUser, setLoggedInUser] =  useContext(mainUser);


const [logingStatus, setLoginStatus] = useState({
    notsuccess:''
})


const [loginformData, setLoginFormData] = useState({});


const handleOnBlur = e=>{
    const newData = {...loginformData};
    newData[e.target.name] = e.target.value;
    setLoginFormData(newData);
}


const handleLoginSubmit =(e)=>{

    fetch('https://ababil-it-server.herokuapp.com/admin/login', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(loginformData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.length){
                setLoggedInUser(data[0])
                sessionStorage.setItem('email', data.email);
                history.push('/admin')
                }else{
                    const loginStatusNew = {...logingStatus};
                    loginStatusNew.notsuccess= "Your mail or Password Not Matched";
                    setLoginStatus(loginStatusNew);
                }
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
                        <p style={{color:'red', textAlign:'center'}}>{logingStatus.notsuccess}</p><br/>
                         <button style={{width:'100%'}} type="submit" class="btn btn-outline-primary">Login</button>
                    </form>
            }


         </div>
    );
};

export default AdminLogin;