import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
//import { useNavigate } from 'react-router-dom';
function HeroSection() {
 // const function handleRegister()
 //const navigate = useNavigate();
  return (
    <div className='hero-container'>
     <div className='hero-video'></div> <video src='/videos/video-1.mp4' autoPlay loop muted  />
      <h1>AGRICULTURE CROPS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' 
        >
          REGISTER/SIGNUP
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={navigate('/products')}
        >
          
          ABOUT US<i className='far fa-play-circle ' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
