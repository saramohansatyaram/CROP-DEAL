import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Crops Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tomato.jpg'
              text='35'
              label='Tomato'
              path='/dealerLogin'
            />
           
            <CardItem
              src='images/tobacco.jpg'
              text='220'
              label='Tobacco'
              path='/dealerLogin'
            />

            <CardItem
              src='images/mango.jpg'
              text='120'
              label='Mango'
              path='/dealerLogin'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sugarcane.jpg'
              text='86'
              label='Sugarcane'
              path='/dealerLogin'
            />
            <CardItem
              src='images/pineapple.jpg'
              text='170'
              label='Pineapple'
              path='/dealerLogin'
            />
            <CardItem
              src='images/beetroot.jpg'
              text='220'
              label='Beetroot6'
              path='/dealerLogin'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
