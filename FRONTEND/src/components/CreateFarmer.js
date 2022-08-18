import React, { useState } from 'react';
import axios from 'axios';
//import {chetta} from 'bootstrap/dist/css/bootstrap.min.css';
//import {Container,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import profileImg from '../images/profile.png'
// //import { CgProfile } from "react-icons/bs";
// import { CgProfile } from 'react-icons/cg';
import {Container,Paper} from '@material-ui/core';
import {Button} from 'react-bootstrap'
//import {Redirect} from 'react-router-redirect'
import 'bootstrap/dist/css/bootstrap.min.css';
var mobileTest="false";
    var emailTest="false";
function CreateCustomer() {
    const paperStyle={padding: '80px 30px', width:'500',backgroundColor:"white"}
   // const paperStyle={padding: '25px 20px', width:'500',backgroundColor:"white", borderRadius:20,}
    const [customer, setCustomer] = useState({
        email: "",
        username: "",
        password: "",
        farmerId: "",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        location:"",
        bank:"",
        accountNo:"",
        bankbranch:"",
        about:""

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
        if (!customer.farmerId) {
            errors['farmerIdErr'] = "Farmer ID is required";
        }
        if (!customer.firstName) {
            errors['firstNameErr'] = "First Name is required";
        }
        
        if (!customer.lastName) {
            errors['lastNameErr'] = "Last Name is required";
        }
        if (!customer.bank) {
            errors['bankErr'] = "Bank Name is required";
        }
        if (!customer.accountNo) {
            errors['accountNoErr'] = "AccountNo is required";
        }
        if (!customer.bankbranch) {
            errors['bankbranchErr'] = "bankbranch is required";
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
        
        if (!customer.location) {
            errors['locationErr'] = " address is required"
        }
        if (!customer.about) {
            errors['aboutErr'] = " About is required"
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
                farmerId:customer.farmerId,
                firstName:customer.firstName,
                lastName:customer.lastName,
                username: customer.username,
                password: customer.password,
                email: customer.email,
                phoneNumber: customer.phoneNumber,
                location: customer.location,
                bank:customer.bank,
                accountNo:customer.accountNo,
                bankbranch:customer.bankbranch,
                about:customer.about
                

            }
            axios.post("http://localhost:8081/farmer/save", palyload)
                .then(resp => {
                    alert(resp.data.firstName + " registered successfully redirecting to login page..");
                    navigate('/');
               

                   
                }).catch(error => {
                    alert("Farmer Details Already Exists");
                })

        }
    }
    const myStyle={
        backgroundImage:
        "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701641304.jpg')",
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

<Container>
        
        <Paper elevation={24} style={paperStyle}>

          {/* <Container style={paperStyle}>  */}
        <div >
        <center> <img src={profileImg} alt="Profile" width="50" height="50" ></img> </center> <p></p>
        <center><h1 style={{fontSize:"20px"}}>Enter farmer details to create new account</h1></center><p></p>
        <p>
            <div class="row">
            <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="farmerId"  value={customer.farmerId} onChange={handleChange} placeholder="Farmer ID"   className="form-control" />
                {
                    formErrors.farmerIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.farmerIdErr}</div>
                }
            </div>
                <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="firstName"  value={customer.firstName} onChange={handleChange} placeholder="First Name"   className="form-control" />
                {
                    formErrors.firstNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.firstNameErr}</div>
                }
            </div>
            <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="lastName"  value={customer.lastName} onChange={handleChange} placeholder="Last Name"   className="form-control" />
                {
                    formErrors.lastNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.lastNameErr}</div>
                }
            </div>
            </div>
            </p>
            <p>
            <div class="row">
             <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="username"  value={customer.username} onChange={handleChange} placeholder="Username"   className="form-control" />
                {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
            </div>
            

            <div class="col">
                {/* <label>Password</label> */}
                <input type="password" name="password" value={customer.password} onChange={handleChange} placeholder="Password"  className="form-control"/>
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            </div>
            </p>
            <p>
            <div class="row"> 
            <div class="col">
                {/* <label>Email</label> */}
                <input type="text" name="email" onChange={handleOnChange} placeholder="Email ID"  className="form-control"/>
                {
                    formErrors.emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailErr}</div>
                }
            </div>
            <div class="col">
                {/* <label>Mobile</label> */}
                <input type="number" name="phoneNumber" onChange={handleOnMobile} placeholder="Phone Number"  className="form-control" />
                {
                    formErrors.phoneNumberErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.phoneNumberErr}</div>
                }
            </div>
            </div>
            </p>
            
            <p>
            <div class="row">
            <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="bank"  value={customer.bank} onChange={handleChange} placeholder="Bank Name"   className="form-control" />
                {
                    formErrors.bankErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.bankErr}</div>
                }
            </div>
            <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="accountNo"  value={customer.accountNo} onChange={handleChange} placeholder="Account Number"   className="form-control" />
                {
                    formErrors.accountNoErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.accountNoErr}</div>
                }
            </div>
            <div class="col">
             {/* <label>Enter Username</label> */}
                <input type="text" name="bankbranch"  value={customer.bankbranch} onChange={handleChange} placeholder="Bank Branch"   className="form-control" />
                {
                    formErrors.bankbranchErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.bankbranchErr}</div>
                }
            </div>
            </div>
           </p>
           <p>
            <div class="row">
            <div class="col">
                {/* <label>Address</label> */}
                <input type="text" name="location" value={customer.location} onChange={handleChange} placeholder=" Farmer Location"  className="form-control"/>
                {
                    formErrors.locationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.locationErr}</div>
                }
            </div>
            
            <div class="col">
                {/* <label>Customer Name</label> */}
                <input type="text" name="about" value={customer.about} onChange={handleChange} placeholder="About"  className="form-control"/>
                {
                    formErrors.aboutErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.aboutErr}</div>
                }
            </div>
            </div>
            </p>
            {/* <div>
                <label>Role</label>
                <input type="role" name="role" value={customer.role} onChange={handleChange} />
                {
                    formErrors.roleErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.roleErr}</div>
                }
            </div> */}


            <div h1 style={{marginLeft: 300}}>
                {/* <p></p> */}
                {/* <button onClick={handleSubmit}>Submit</button> */}
                <centre>
                <Button variant="dark" onClick={handleSubmit}>REGISTER</Button>
                </centre>
                {/* <button onClick={() => { window.location.href = "/" }}> Login</button> */}
            </div>
        </div>
        </Paper> 
    </Container>
       
        
        </div>
    </div>
   
    )
    
}

export default CreateCustomer;