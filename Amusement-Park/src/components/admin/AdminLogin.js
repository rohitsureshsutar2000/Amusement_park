    import React,{useState,useEffect} from 'react'
    import { Link } from 'react-router-dom';
    import '../admin/Admin.css';

    let adminLogin=
    {
        'email':'admin@gmail.com',
        'password':'admin'
    };

    function AdminLogin() {
            useEffect(()=>{
                    let alertDiv = document.getElementById("alertDiv");
                    let Dashboard = document.getElementById("Dashboard");
                    let alertDivSuccess = document.getElementById("alertDivSuccess");

                    alertDiv.style.display = "none";
                    Dashboard.style.display = "none";
                    alertDivSuccess.style.display = "none";
            },[]);

            let [loginData,setLoginData]=useState({});

            let onHandleChange=(event)=>{
                setLoginData({...loginData,[event.target.name]:event.target.value})
            }

            let verifyAdmin=()=>{
                let alertDiv = document.getElementById("alertDiv");
                let alertDivSuccess = document.getElementById("alertDivSuccess");
                let Dashboard = document.getElementById("Dashboard");

                // Varification Code 
                if((loginData.pass == adminLogin.pass) && (loginData.email == adminLogin.email))
                {
                    alertDiv.style.display = "none";
                    alertDivSuccess.style.display = "block";
                    Dashboard.style.display = "block";
                }
                else{
                        alertDiv.style.display = "block";
                }

            }

            let onLogin = () => {
                verifyAdmin();
        }

            return (
                <>
                    <div className="container m-5 ">
                        <center>
                            <form className="m-5 admin-login border rounded border-dark p-4" id="login-form" >
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" onChange={onHandleChange} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={onHandleChange} name="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <Link to="/AdminDashboard">
                                <button type="button" className="btn btn-primary mr-2 mb-3" onClick={onLogin} id="Dashboard">Go to AdminDashboard</button>
                                </Link>
                                <button type="button" className="btn btn-primary" onClick={onLogin} id="Submit">Submit</button>
                                <div class=" text-center alert alert-danger m-4" id="alertDiv" role="alert">
                                    Invaid Input
                                </div>
                                <div class=" text-center alert alert-success m-4" id="alertDivSuccess" role="alert">
                                    Login Successful !!
                                </div>
                            </form>
                        </center>
                    </div>

                    
                </>
            )
        }

        export default AdminLogin
