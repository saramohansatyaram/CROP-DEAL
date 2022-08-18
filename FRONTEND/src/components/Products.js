import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from "react";
import { Col, Row } from 'reactstrap'

function Products() {
    const [crops, setCrops] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8083/crop/allCrops").then((result) => {
        result.json().then((resp) => {
          setCrops(resp);
        });
      });
    }, []);
  return (

    <div className='cards'>
      <h1>Check out these CROPS Collections</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <Row >
        {
                crops.map((item,i)=>
                    <Col className='cards__items' sm="4">
                           {/* <CardItem  src={handleImage(item.cropName)} */}
                           {/* import farmerbg from '../images/farmerbg.jpg'; */}
                           {/* <CardItem  src='images/img-8.jpg' */}
                           <CardItem  src={'images/'+item.cropName+'.jpg'}
                            text={item.price}
                            label={item.cropName}
                            // /theater/get/:id
                            // "/crops/get/:id"
                            path={'/crops/get/'+item.id}     
                            />
                            
                            {/* <button class="btn btn-primary" > Buy</button> */}
                             
                    </Col>
                    
                  
            )
            
}
          {/* </ul> */}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Products;
