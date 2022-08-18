import React, { useState } from 'react';
import axios from 'axios';
import {Container,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import profileImg from '../images/profile.png'
// //import { CgProfile } from "react-icons/bs";
// import { CgProfile } from 'react-icons/cg';

var mobileTest="false";
    var emailTest="false";
function CreateCustomer() {
    const paperStyle={padding: '55px 60px', width:'500',backgroundColor:"white", borderRadius:20,}
    const [customer, setCustomer] = useState({
        email: "",
        username: "",
        password: "",
        dealerId: "",
        firstName:"",
        lastName:"",
        phoneNumber:"",
    })
    
    const [formErrors, setFormErrors] = useState({});
    // const handleChange = (event) => {
    //     setCustomer(customer => ({ ...customer, [event.target.name]: event.target.value }));
    // }
    function handleChange(evt) {
        const value = evt.target.value;
        setCustomer({
          ...customer,
          [evt.target.name]: value
        });
      }


    const emp = () => {
        let errors = {};
        errors['emailErr'] = ""
        setFormErrors(errors);
    }

    const navigate = useNavigate();
    const handleOnChange = (email) => {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        //const re=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        if (re.test(email.target.value)) {
            emp();
            emailTest="true"
            handleChange(email);
            
        }
        else {
            handleChange(email);
            if (email.target.value === "") { emp(); }
            else {
                let errors = {};
                errors['emailErr'] = "email  is not correct"
                setFormErrors(errors);
            }
        }
    }
    const emp1 = () => {
        let errors = {};
        errors['phoneNumberErr'] = ""
        setFormErrors(errors);
    }
    const handleOnMobile = (phoneNumber) => {
       // const re1 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        const re=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
        console.log(phoneNumber.target.value);
        if (re.test(phoneNumber.target.value)) {
            console.log("Success")
            emp1();
            mobileTest="true";
            handleChange(phoneNumber);
        }
        else {
            handleChange(phoneNumber);
            if (phoneNumber.target.value === "") { emp1(); }
            else {
                let errors = {};
                errors['phoneNumberErr'] = "Enter 10 digit mobile number"
                setFormErrors(errors);
            }
        }
    }

    const handleSubmit = () => {
        //validate form
        let errors = {};
        if (!customer.dealerId) {
            errors['dealerIdErr'] = "Dealer ID is required";
        }
        if (!customer.firstName) {
            errors['firstNameErr'] = "First Name is required";
        }
        
        if (!customer.lastName) {
            errors['lastNameErr'] = "Last Name is required";
        }
        if (!customer.email) {
            errors['emailErr'] = "email  is required"
        }
        if (!customer.phoneNumber) {
            errors['phoneNumberErr'] = "Number is required"
        }
        console.log(emailTest);
        console.log(mobileTest);
        if(emailTest==="false")
        {
            errors['emailErr'] = "please enter correct Email ID"
        }
        if(mobileTest==='false')
        {
            errors['phoneNumberErr'] = "please enter correct mobile"
        }
        if (!customer.username) {
            errors['usernameErr'] = "username is required"
        }
        if (!customer.password) {
            errors['passwordErr'] = "password is required"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const palyload = {
                dealerId:customer.dealerId,
                firstName:customer.firstName,
                lastName:customer.lastName,
                username: customer.username,
                password: customer.password,
                email: customer.email,
                phoneNumber: customer.phoneNumber,
                
            }
            axios.post("http://localhost:8082/dealer/save", palyload)
                .then(resp => {
                    alert(resp.data.firstName + " registered successfully redirecting to login page..");
                    navigate('/dealerLogin');
                }).catch(error => {
                    alert("Farmer Details Already Exists");
                })

        }
    }
    const myStyle={
        backgroundImage:
        "url('https://free4kwallpapers.com/uploads/originals/2016/01/03/iguacu-falls-nexus-6p-wallpaper.jpg')",
        height:'120vh',
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
        <div >
        <center> <img src={profileImg} alt="Profile" width="50" height="50" ></img> </center> <p></p>
        <center><h1 style={{fontSize:"20px"}}>Enter dealer details</h1></center><p></p>
            <div >
            <div>
             {/* <label>Enter Username</label> */}
                <input type="text" name="dealerId"  value={customer.farmerId} onChange={handleChange} placeholder="Dealer ID"   className="form-control" />
                {
                    formErrors.dealerIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.dealerIdErr}</div>
                }
            </div>
                <div>
             {/* <label>Enter Username</label> */}
                <input type="text" name="firstName"  value={customer.firstName} onChange={handleChange} placeholder="First Name"   className="form-control" />
                {
                    formErrors.firstNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.firstNameErr}</div>
                }
            </div>
            <div>
             {/* <label>Enter Username</label> */}
                <input type="text" name="lastName"  value={customer.lastName} onChange={handleChange} placeholder="Last Name"   className="form-control" />
                {
                    formErrors.lastNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.lastNameErr}</div>
                }
            </div>
            </div>
            <div>
             <div>
             {/* <label>Enter Username</label> */}
                <input type="text" name="username"  value={customer.username} onChange={handleChange} placeholder="Username"   className="form-control" />
                {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
            </div>
            

            <div >
                {/* <label>Password</label> */}
                <input type="password" name="password" value={customer.password} onChange={handleChange} placeholder="Password"  className="form-control"/>
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            </div>
            <div> 
            <div>
                {/* <label>Email</label> */}
                <input type="text" name="email" onChange={handleOnChange} placeholder="Email ID"  className="form-control"/>
                {
                    formErrors.emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailErr}</div>
                }
            </div>
                {/* <label>Mobile</label> */}
                <input type="number" name="phoneNumber" onChange={handleOnMobile} placeholder="Phone Number"  className="form-control" />
                {
                    formErrors.phoneNumberErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.phoneNumberErr}</div>
                }
            </div>
            
            {/* <div>
                <label>Role</label>
                <input type="role" name="role" value={customer.role} onChange={handleChange} />
                {
                    formErrors.roleErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.roleErr}</div>
                }
            </div> */}


            <div style={{marginLeft: 65}}>
                <p></p>
                {/* <button onClick={handleSubmit}>Submit</button> */}
                <Button variant="dark" onClick={handleSubmit}>SIGNUP</Button>
                {/* <button onClick={() => { window.location.href = "/" }}> Login</button> */}
            </div>
        </div>
        </Container>
    </div>
    </div>
    )
}
export default CreateCustomer;