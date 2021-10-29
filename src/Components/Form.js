import React, {useState} from "react";

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [submitted, setSubmit] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstname, lastname, email, password
        };
        console.log(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpassword("");
        setSubmit(true);
    }

    return (
        <div>
            {
                submitted ? <h4>User Created, Thank You!!!</h4> :
                <div>
                <form onSubmit={createUser}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" onChange={(e)=>setFirstname(e.target.value)} value={firstname} ></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" onChange={(e)=>setLastname(e.target.value)} value={lastname}></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Email:</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Password:</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" onChange={(e)=>setConfpassword(e.target.value)} value={confpassword}></input>
                    </div>
                    <input type="submit" value="Create User"></input>
                    <br></br>
                    <h4>First Name: {firstname}</h4>
                    <h4>Last Name: {lastname}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Password: {password}</h4>
                    <h4>Confirm Password: {confpassword}</h4>
                </form>
            </div>
            }
        </div>
        
    )
}


export default Form;