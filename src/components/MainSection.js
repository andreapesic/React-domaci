import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './MainSection.css';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function MainSection() {

  const clients = [
    {
        name: 'Mark Robinson',
        text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
        src: Image1
    },
    {
        name: 'Jane Webbster',
        text: 'Amazing care and service from start to finish. Really in depth conversation about what I needed and looked to achieve from the massage. Highly recommend Bristol Massage Therapy!',
        src: Image2
    },
    {
        name: 'Meryl Johnnson',
        text: 'Fantastic massage from Julie, who was attentive and professional, listened to what I had to say and offered advice. The massage was gentle but definitely did the trick.',
        src: Image3
    }
];  

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
      <Cards title='WHAT DO OUR CLIENTS SAY?' data1={clients} type='clients'></Cards>
    </div>
    </>
    
  );
}

export default MainSection;
