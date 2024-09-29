import React from 'react'
import './Popup.css'

const Popup = ({product}) => {
  return (
    <div>
      <div className="popup-container">
        <ul>
            <li>
                <h2>{product.title}</h2>
            </li>
            <li className='sub-text'>{product.subText}</li>
            <li className='text-small'>Written By: {product.author}</li>
            <li className='text-small'>Narrated By: {product.narratedBy}</li>
            <li className='text-small'>{product.recordType}</li>
        </ul>
        <p>{product.description}</p>
    </div>
    </div>
  )
}

export default Popup
