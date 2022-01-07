import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './MainSection.css';

function MainSection() {
  return (
    <>
    <div className='main-container'>
      <image src='../assets/img-home.jpg'/>
      <h1>WELCOME TO LOTUS SPA!</h1>
      <p>Do something today that your future self will thank you for.</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/services'
        >
          MAKE AN APPOINTMENT
        </Button>
      </div>
    </div>
    <div className='main-text'>
    <h1>ABOUT</h1>
    <h3> at Hyatt Regency Belgrade</h3>
      <p>
      Rejuvenate your body and soul at Lotus Fitness Center & Spa at Hyatt Regency Belgrade.
      </p>
      <p>
      Enjoy our cooling and hydrating treatments or give your skin a breath of fresh air with the Biohydra Holistic facial. In addition to a variety of healing and soothing treatments, our world-class luxury spa includes a swimming pool, whirlpool, sauna, and steam rooms.
      </p>
      <p>
      Find peace of mind and emerge refreshed at Lotus Fitness Center & Spa at Hyatt Regency in Belgrade, Serbia.
      </p>
    </div>
    <div className='main-clients'>
      <Cards></Cards>
    </div>
    </>
    
  );
}

export default MainSection;
