import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmpassword } = credentials;
        if (password !== confirmpassword) {
            alert('The passwords don\'t match');
            return;
        }
        const response = await fetch(`http://localhost:5002/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/");
            props.showAlert("Account created Successfully..!!", "info");
        }
        else {
            props.showAlert("Some error occurred while signing up.\nPlease try again later..!!", "warning")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='mt-3'>
            <div className="container mb-4 mx-5">
            <h2 style = {{display: 'flex', alignContent: "center", justifyContent: 'center'}}>Signup to create an account on the iNotebook</h2>
            </div>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="name" className="form-control" name="name" onChange={onChange} value={credentials.name} />
                                                    <label className="form-label" htmlFor="name">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="email" className="form-control" name="email" onChange={onChange} value={credentials.email} />
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="password" name="password" className="form-control" onChange={onChange} value={credentials.password} minLength={5} required />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="confirmpassword" name="confirmpassword" className="form-control" onChange={onChange} value={credentials.confirmpassword} minLength={5} required />
                                                    <label className="form-label" htmlFor="confirmpassword">Repeat your password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
