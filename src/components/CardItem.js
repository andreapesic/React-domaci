import React from 'react';
import { Button } from './Button';
import { useState } from 'react';

function CardItem({obj, type, makeAnAppointment}) {
  const [starNum, setStarNum] = useState(obj.star);
  const [clicked, setClicked] = useState(false);

  const onClick1 = () => {
    if(!clicked) {
      setStarNum(starNum+1);
      setClicked(true);
    }
  }

  const onClick2 = () => {
    if(clicked) {
      setStarNum(starNum-1);
      setClicked(false);
    }
  }


  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={type=='clients' ? '“' : obj.name}>
            <img
              className='cards__item__img'
              src={obj.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{obj.text}</p>
            {type == 'clients' ? <h5 className='cards__item__title'>{obj.name}</h5> : <></> }
            {type == 'clients' ? <></> : 
              <div className='star-container'>
                <ul>
                  <li>
                    {clicked == false ? <i class="far fa-star" onClick={onClick1}></i> :
                     <i class="fas fa-star" onClick={onClick2}></i>}
                  </li>
                  <li><p className='star-number'>{starNum}</p></li>
                  <li>
                    <Button 
                      className='btns' 
                      buttonStyle='btn--primary' 
                      buttonSize='btn--medium' 
                      link={'/services'} 
                      id = {obj.id}
                      onClick={makeAnAppointment}
                    >
                      MAKE AN APPOINTMENT
                    </Button>
                  </li>
                </ul>
                
                
              </div>

             }
            
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
