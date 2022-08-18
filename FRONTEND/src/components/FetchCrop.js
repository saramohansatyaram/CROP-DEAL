import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cartbg from '../images/Cartbg.jpg';
//import CardItem from './CardItem';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import {Container,Paper} from '@material-ui/core';
import apple from '../images/apple.jpg'
// import profileImg from '../images/profile.png';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login'
import './Cards.css';
import TextField from '@mui/material/TextField';
import PaytmChecksum from 'paytmchecksum'
import https from 'https'
var quantityTest="false";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            fontSize:'50px'
        },
    },
}));
const pStyle={
    fontSize:'30px',
};
function FetchCrop() {

    

    const [quantity,setquantity]=useState('');
    const [formErrors, setFormErrors] = useState({});
    const emp = () => {
        let errors = {};
        errors['quantityErr'] = ""
        setFormErrors(errors);
    }
    const handleOnQuantity=(quantity)=>{
        if((quantity.target.value)<=(crop.quantity))
        {
            console.log("Quantity Satisfied")
            emp();
            quantityTest="true";
            setquantity(quantity.target.value);
            //handleChange(quantity);
        }
        else{
            //handleChange(phoneNumber);
            setquantity(quantity.target.value);
            if (quantity.target.value === "") { emp(); }
            else {
                let errors = {};
                errors['quantityErr'] = "Enter value less than quantity available!"
                setFormErrors(errors);
            }
        }
    }

    
   
    var amount;
    const handlePay=(e)=>{
        e.preventDefault();
        let errors = {};
        if (!quantity) {
            errors['quantityErr'] = "Quantity is required"
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
           // alert("No errors")
            var options={
                key:"",
                key_secret:"",
                amount: quantity*crop.price,
                currency:"INR",
                name:"UDAY_SIMHA",
                description:"for testing purpose",
                handler: function(response){
                    alert(response.razorpay_payment_id)
                },
                prefill:{
                    name:"Uday",
                    email:"Uday@gmail.com",
                    contact:"8309075532"
                },
                notes:{
                    address:"Razorpay Corporate office"
                },
                theme:{
                    color:"#3399cc"
                }
            };   
            var pay = new window.Razorpay(options);
            pay.open();      
           
        }
        
        // if(amount==="")
    }
    
   
    const paperStyle={padding: '40px 30px', width:'500',backgroundColor:"white"}
    const [crop, setCrop] = useState([]);
    const { id } = useParams();
    const classes=useStyles();
    const myStyle={
        backgroundImage:
        "url('https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=996&t=st=1660755159~exp=1660755759~hmac=770fa4e21e9d5a39453ffe3d37848ef256cbec11a72f2cff419013e8d9a33bf3')",
        // backgroundImage:`url(${Cartbg})`,
        height:'120vh',
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        fetch("http://localhost:8083/crop/crop/"+id).then((result) => {
          result.json().then((resp) => {
            setCrop(resp);
          });
        });
      }, []);
      console.log(crop)
      
    return (
        <div style={myStyle}>
            {/* images/Tomato.jpg */}
            {/* <img src="/images/Tomato.jpg"> </img> */}
            <div >
                {/* <img src={apple}></img> */}

    <div style={{
        position: 'absolute', left: '30%', top: '55%',
        transform: 'translate(-50%, -50%)'
    }}>
        
    <Container >
        <Paper elevation={24} style={paperStyle}>
        {/* <form  className={classes.root} noValidate autoComplete='off'> */}
        <figure className='cards__item__pic-wrap' data-category={crop.cropName}>
            <div style={{height: 100,width: 300}}>
        <img
              className='cards__item__img'
              alt='Travel Image'
              src={'/images/'+crop.cropName+'.jpg'}
            //   src="/images/sugarcane.jpg"
            //   ../images/apple.jpg
            />
            </div>
             </figure>
             {/* <div className='cards__item__info'> */}
            <h5 style={{marginLeft:100}}> Rs. {crop.price}/kg  </h5> 
            {/* <h5> Crop Origin: {crop.address} </h5> 
            <h5> Crop Origin: {crop.address} </h5> */}
           
          {/* </div> */}
        {/* </form>  */}
      </Paper> 
    </Container>
    </div>
    </div>
    <div style={{
        position: 'absolute', left: '70%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <h1 style={{ fontSize:'35px', color:'red'}}>  {crop.cropName}    </h1>
        <p></p> 
        <div style={{fontSize: '20px'}}>
        <p >  Crop Origin : {crop.address} </p>
        <p >  Quantity Available :{crop.quantity} kgs  </p>
        </div > 
        <TextField
          id="quantity"
          label="Enter Quantity"
          type="text"
          value={quantity}
          onChange={handleOnQuantity}
          autoComplete="current-password"
          sx={{ label: { color: 'black' }}}
        />
        {
                    formErrors.quantityErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.quantityErr}</div>
                }
            <p></p>
<center>   <Button variant="contained" endIcon={<LoginIcon />} style={{color:"white",backgroundColor:"black"}} onClick={handlePay}>Pay Rs.{crop.price*quantity}</Button></center>
    {/* <TextField id="username" label="Enter quantity" variant="standard" type="text" sx={{ label: { color: 'black' } }}></TextField> */}
        </div>
       
        </div>   
    )
}
export default FetchCrop;