import React, {useState} from "react";

const Form = () => {

    //creating a state variable to bind form info ?one way || two-way?
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [pwd, setPWD] = useState("");

    
    return(
        <div> 
            <div className="container">
                <h3 className="btn btn-outline-secondary">Fill this form out!</h3>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="userName">Username:</label>
                        <input onChange = {(e)=>setName(e.target.value)} type="text" className="form-control"/>
                        {
                            name.length<3 ? <p className="text-danger">Username must be at least 3 characters long </p> : ""
                        }

                        <label htmlFor="emailAddress">Email Address:</label>
                        <input onChange = {(e)=>setEmail(e.target.value)} type="email" className="form-control"/>
                        {
                            email.length<5 ? <p className="text-danger">Email address must be at least 5 characters long </p> : ""
                        }

                        <label htmlFor="password">Password:</label>
                        <input onChange = {(e)=>setPassword(e.target.value)} type="password" className="form-control"/>
                        {
                            password.length<8 ? <p className="text-danger">Password must be at least 8 characters long </p> : ""
                        }

                        <label htmlFor="confirmPassword">Re-type your password:</label>
                        <input onChange = {(e)=>setPWD(e.target.value)} type="password" className="form-control"/>
                        {
                            pwd.length !== password.length ? <p className="text-danger">One of these is not like the other... </p> : ""
                        }

                        {/* <input onClick={(e)=>whatgoeshere(e.target.form)} type="submit" value="Click me Thank You" className="btn btn-outline-success" /> */}
                    </div>
                </form>
                <hr />
                <h2>This is the submission</h2>
                <p>Username: {name} </p>
                <p>User Email Address: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {pwd} </p>
            </div>
        </div>
    )
}

export default Form;