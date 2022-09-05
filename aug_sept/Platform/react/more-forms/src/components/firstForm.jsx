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

                        <label htmlFor="emailAddress">Email Address:</label>
                        <input onChange = {(e)=>setEmail(e.target.value)} type="email" className="form-control"/>

                        <label htmlFor="password">Password:</label>
                        <input onChange = {(e)=>setPassword(e.target.value)} type="password" className="form-control"/>

                        <label htmlFor="confirmPassword">Re-type your password:</label>
                        <input onChange = {(e)=>setPWD(e.target.value)} type="password" className="form-control"/>

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