import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

function CardItem(props) {
  const navigate = useNavigate();
function handleClick(){
    // alert(props.src);
    navigate(props.path);


}
  
  return (
    <>
      <li className='cards__item'>
        {/* <div className='cards__item__link'> */}
        <Link className='cards__item__link' to={props.path}>
        {/* <Link className='cards__item__link' > */}
        {/* <Link className='cards__item__link' to={props.path}> */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
           eslint-disable-next-line 
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          {/* </Link> */}
          <div className='cards__item__info'>
            <h5 className='cards__item__text'> Rs. {props.text}/kg  <div className='card_space'> <Button variant="contained" onClick={handleClick} style={{color:"white",backgroundColor:"black"}} >Buy Now</Button></div></h5> 
           
          </div>
          
          {/* <Button variant="contained" endIcon={<SendIcon />}> Buy Now </Button> */}
         
          {/* </div> */}
        </Link>
        
      </li>
    </>
  );
}

export default CardItem;
