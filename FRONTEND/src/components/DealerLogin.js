import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
//import {Link} from 'react-router-dom';
//import farmerbg from '../images/farmerbg.jpg';
import {Container} from 'react-bootstrap'
//import {Paper} from 'react-bootstrap'
function Login() {
    const paperStyle={padding: '68px 50px', width:'500',backgroundColor:"white",borderRadius:'25px', fontSize:"20px"}
    const but={padding: '10px 30px', marginLeft: 80}
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    // const handleChange = (event) => {
    //     setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    // }

    function handleChange(evt) {
        const value = evt.target.value;
        setLoginForm({
          ...loginForm,
          [evt.target.name]: value
        });
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
            axios.post("http://localhost:8082/dealer/dealer-login?password="+payload.password+"&username="+payload.username).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.lastName.toUpperCase() +" "+resp.data.firstName.toUpperCase());
                let user = {
                    farmerId: resp.data.farmerId,
                    firstName: resp.data.firstName,
                }
                localStorage.setItem("myUser", JSON.stringify(user));


                navigate("/products");
                // if (resp.data.role === "customer") {
                //     navigate("/CustomerMenuBar");



                // }
                // if (resp.data.role === "admin") {



                //     navigate("/AdminMenuBar");



                // }



            }).catch(error => {
                console.log(error);
                console.log(error.response.data);
                console.log(error.response);
                alert("Invalid Credentials");
            })
        }
        event.preventDefault();
    }
    const myStyle={
        backgroundImage:`url('https://www.agcocorp.com/content/dam/agcocorp/freeForm/AR2022-AGCOHero-1366x768.jpg')`,
        height:'120vh',
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
        <div style={{
            
            position: 'absolute', left: '70%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>

          <Container style={paperStyle}> 
          <center><h1 style={{fontSize:"28px"}}>DEALER LOGIN</h1></center><p></p>
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
                    Do u have an account? <a href="/createDealer">REGISTER</a>
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