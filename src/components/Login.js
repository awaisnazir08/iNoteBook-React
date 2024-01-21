import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials]= useState({email: "", password: ""});

    const handleSubmit = async (e) => {
        //to avoid reloading of the screen
        e.preventDefault();
        const response = await fetch(`http://localhost:5002/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success)
        {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/");
            props.showAlert("Logged in Successfully..!!", "info")
        }
        else
        {
            props.showAlert("Invalid credentials..!!", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='mt-3'>
            <h2>Login to use the iNotebook application</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emaillabel" className="form-label mt-3">Email address</label>
                    <input type="email" className="form-control" name="email" onChange = {onChange} value = {credentials.email} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label ht="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value = {credentials.password} onChange = {onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;
