import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function Cards() {

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
    <div className='cards'>
      <h1>WHAT OUR CLIENTS SAY?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem obj={clients[0]}/>
            <CardItem obj={clients[1]}/>
            <CardItem obj={clients[2]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
