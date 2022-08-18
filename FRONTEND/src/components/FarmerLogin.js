import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router';
//import {Link} from 'react-router-dom';
import farmerbg from '../images/farmerbg.jpg';
import {Container} from 'react-bootstrap'
//import {Paper} from 'react-bootstrap'
function Login() {
    const paperStyle={padding: '60px 30px', width:'500',backgroundColor:"white",borderRadius:'25px'}
    const but={padding: '10px 30px'}
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({});
    //const navigate = useNavigate();
    const handleChange = (event) => {
        setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    }
const handleSubmit = (event) => {
        //validation login form
        let errors = {};
        if (!loginForm.username) {
            errors["usernameErr"] = "Username is required"
        }
        if (!loginForm.password) {
            errors["passwordErr"] = "Password is required"
        }
        
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        // if no errors call the login api
        if (noErrors) {

            let payload = {
                username: loginForm.username,
                password: loginForm.password,
                
            }
            axios.post("http://localhost:8081/farmer/farmer-login?password="+payload.password+"&username="+payload.username).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.lastName +" "+resp.data.firstName);

            }).catch(error => {
                console.log(error);
                console.log(error.response.data);
                console.log(error.response);
                alert("Invalid Credentials");
            })
        }
      //  event.preventDefault();
    }
    const myStyle={
        backgroundImage:`url(${farmerbg})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>

          <Container style={paperStyle}> 
          <center><h1 style={{fontSize:"20px"}}>FARMER LOGIN</h1></center><p></p>
        <div class="row h-100 justify-content-center align-items-center">
            <div className='col-10 col-md-8 col-lg-12'>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username" className="form-control" value={loginForm.username} onChange={handleChange} />
                    {
                        formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={loginForm.password} onChange={handleChange} />
                    {
                        formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                    }
                </div>
            
                <div>
                    <div style={but}>
                    <button onClick={handleSubmit} className="btn btn-primary">Login</button><br/></div>
                    Do u have an account? <a href="/createCustomer">REGISTER</a>
                      {/* <Link to="/createCustomer" ><button className="btn btn-primary"> Register</button></Link>  */}
                </div>
            </div>
        </div>
    </Container>
    </div>
    </div>

    )
}
export default Login;