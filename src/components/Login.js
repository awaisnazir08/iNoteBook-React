import React, {useState} from 'react'

const Login = () => {

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
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emaillabel" className="form-label">Email address</label>
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
