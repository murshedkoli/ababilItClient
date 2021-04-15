import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { mainUser } from '../../../App';
import "firebase/auth";
import firebase from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyD9QMMjMISRDFJiouqBaT_2AoGa8gCXml4",
    authDomain: "ababil-it.firebaseapp.com",
    projectId: "ababil-it",
    storageBucket: "ababil-it.appspot.com",
    messagingSenderId: "223483497609",
    appId: "1:223483497609:web:7e4965451f0aacd6b88a58"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

    

const AdminLogin = () => {

  document.title = "Admin Login - Ababil Information Technology"
  
  const [notification, setNotification] = useState('');

let history = useHistory();

const [loggedInUser, setLoggedInUser] =  useContext(mainUser);


// const [logingStatus, setLoginStatus] = useState({
//     notsuccess:''
// })

const googleLogin= ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // var credential = result.credential;

    // var token = credential.accessToken;
    var user = result.user;
    if(user.email === 'murshedkoli@gmail.com'){
     
      const forSession= JSON.stringify(user)
      sessionStorage.setItem('user', forSession);
           
    history.push('/admin');
    setNotification("");
    }else{
      setNotification(` Hey ${user.displayName} you are not Authorized Admin`);
    }
  }).catch((error) => {

    var errorMessage = error.message;
    var email = error.email;
    console.log(errorMessage, email)
  });
}



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
                sessionStorage.setItem('user', data);
                console.log(data)
                history.push('/admin')
                }else{
                    // const loginStatusNew = {...logingStatus};
                    // loginStatusNew.notsuccess= "Your mail or Password Not Matched";
                    // setLoginStatus(loginStatusNew);
                }
            })
          
    e.preventDefault();
}


    return (
        <div style={{ margin:'70px auto'}} className="col-md-4 col-sm-9">

            
           
            {
                loggedInUser.email ? <div> <h1>{loggedInUser.Name} you are Logged In Now....</h1></div>:
              <div>
                    <form onSubmit={handleLoginSubmit} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>
                    <h3 className="text-center" style={{color:'red'}}>{notification}</h3>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleOnBlur} type="email" class="form-control " name="email" id="exampleInputEmail1"  placeholder="Enter email" required/>
                       
                    </div><br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onBlur={handleOnBlur} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        </div><br/>
                        {/* <p style={{color:'red', textAlign:'center'}}>{logingStatus.notsuccess}</p><br/> */}
                         <button style={{width:'100%'}} type="submit" class="btn btn-outline-primary">Login</button><br/><br/>
                         <button onClick={googleLogin} style={{width:'100%'}} type="submit" class="btn btn-primary">Login with Google</button>
                    </form>

              </div>
            }


         </div>
    );
};

export default AdminLogin;