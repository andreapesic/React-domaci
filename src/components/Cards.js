import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards({data1, data2, title, type, makeAnAppointment}) {
  return (
    <div className='cards'>
      <h1>{title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           {
             data1.map(item => (<CardItem obj={item} type={type} makeAnAppointment={makeAnAppointment} />))
           }
          </ul>
          {
            data2 != null ? 
            <ul className='cards__items'>
              {
                data2.map(item => (<CardItem obj={item} type={type} makeAnAppointment={makeAnAppointment} />))
              }
           </ul> : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
