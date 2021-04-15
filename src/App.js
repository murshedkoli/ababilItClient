import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Courses from "./Component/Courses/Courses";
import Registration from "./Component/Registartion/Registration";
import Admin from "./Component/AdminComponent/Admin/Admin";
import AdminLoginPage from "./Component/AdminComponent/AdminLogin/AdminLoginPage";
import NewApplicatin from "./Component/AdminComponent/NewApplication/NewApplicatin";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import StudentsPublic from "./Component/StudentsPublic/StudentsPublic";
import TotalPayment from "./Component/AdminComponent/TotalPayment/TotalPayment";

export const mainUser = createContext();

function App() {

const [loggedInUser, setLoggedInUser] = useState({});



  return (
    <mainUser.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route  path="/courses">
              <Courses></Courses>
            </Route>

            <Route  path="/registration">
              <Registration></Registration>
            </Route>

            <Route  path="/admin/login">
              <AdminLoginPage></AdminLoginPage>
            </Route>

            <Route  path="/publicstudents">
              <StudentsPublic></StudentsPublic>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute  path="/newapplication">
              <NewApplicatin></NewApplicatin>
            </PrivateRoute>

            <PrivateRoute  path="/totalpayment">
              <TotalPayment></TotalPayment>
            </PrivateRoute>


          </Switch>
        </Router>
    </mainUser.Provider>
  );
}

export default App;
