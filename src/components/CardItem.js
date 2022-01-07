import React from 'react';

function CardItem({obj}) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category='"'>
            <img
              className='cards__item__img'
              src={obj.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{obj.text}</p>
            <h5 className='cards__item__title'>{obj.name}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
