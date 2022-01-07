import React from 'react';
import { Button } from './Button';

function CardItem({obj, type}) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={type=='clients' ? '"' : obj.name}>
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
                  <li><i class="fas fa-star"></i></li>
                  <li><p className='star-number'>{Math.floor((Math.random() * 5) + 1)}</p></li>
                  <li>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium' link='/services'>
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
