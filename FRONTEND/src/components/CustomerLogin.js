import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Container,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import profileImg from '../images/profile.png';
import farmerbg from '../images/farmerbg.jpg';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import axios from 'axios';
//import {Redirect} from 'react-router-redirect'
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            fontSize:'50px'
        },
    },
}));
const pStyle={
    fontSize:'15px',
};
export default function CustomerLogin() {
    const paperStyle={padding: '80px 30px', width:'500',backgroundColor:"white"}
    //const[email,setUser]=useState('')
    //const[password,setPass]=useState('')
    const classes=useStyles();
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
   // let history=useHistory();

    const[loginFormusername,setLoginFormusername]=useState('')
    const[loginFormpassword,setLoginFormpassword]=useState('')
    // const [loginForm, setLoginForm] = useState({
    //     username: "",
    //     password: ""
    // })
    // const handleChange = (event) => {
    //     setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    // }
    const handleClick=(event)=>{
       // e.preventDefault()
        // const Admin={email,password}
        // console.log(Admin)
        // if(email==='' || password==='' )
        // {
        //     alert("Enter All Details")
        // }

        let errors = {};
        if (!loginFormusername) {
            errors["usernameErr"] = "Username is required"
        }
        if (!loginFormpassword) {
            errors["passwordErr"] = "Password is required"
        }
        
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        
        if(noErrors){
            let payload = {
                username: loginFormusername,
                password: loginFormpassword,
                
            }
              //  console.log(email);
                axios.post("http://localhost:8081/farmer/farmer-login?password="+payload.password+"&username="+payload.username).then(resp => {
                    console.log(resp.data);
                    alert("Welcome " + resp.data.lastName +" "+resp.data.firstName);
                    navigate('/');
                
                    // let user = {
                    //     farmerId: resp.data.farmerId,
                    //     firstName: resp.data.firstName,
                    // }
                    // localStorage.setItem("myUser", JSON.stringify(user));
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
            height:'120vh',
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
    <Container>
        
        <Paper elevation={24} style={paperStyle}>
            

        <form  className={classes.root} noValidate autoComplete='off'>
            <Box sx={{ '& > :not(style)': { m: 1 } }} >
             
              <center> <img src={profileImg} alt="Profile" width="50" height="50" ></img> </center> 
              
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
                    <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
                    <TextField id="username" label="Username" variant="standard" type="text" sx={{ label: { color: 'black' } }}
                    value={loginFormusername}
                   // onChange={handleChange}
                    onChange={(e)=>setLoginFormusername(e.target.value)}
                    
                    />
                    <div style={{fontSize:"20px"}}>
                    {
                        formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                    }
                    </div>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                    <TextField id="password" label="Password" variant="standard" type="password" sx={{ label: { color: 'black' } }}
                    value={loginFormpassword}
                    //onChange={handleChange}
                   
                    onChange={(e)=>setLoginFormpassword(e.target.value)}
                    />
                    <div style={{fontSize:"20px"}}>
                     {
                        formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                    }
                    </div>
                </Box>
            </Box>
           
         <center>   <Button variant="contained" endIcon={<LoginIcon />} style={{color:"white",backgroundColor:"black"}} onClick={handleClick}>Login</Button></center>
        <p style={pStyle}>  Do u have an account?<u><Button href="/register" >Register</Button></u>
        </p> 
        </form> 
      </Paper> 
    </Container>
    </div>
    </div>
  );
}