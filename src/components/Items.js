import React, { useContext } from 'react'
import './cart.css' //css file
import { CartContext } from './Cart';

const Items = ({ id,name,image,color,price,countInStock}) => {
    const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className='items-info'>
                        <div className='product-img'>
                            <img src={image} alt='image'></img>
                        </div>
                        <div className='title'>
                            <h2>{name}</h2>
                            <p>{color}</p>
                        </div>
                        <div className='title'>
                            <h3>Stock</h3>
                            <p><i className="fa-solid fa-circle-check"></i>{countInStock}</p>
                        </div>
                        <div className='title'>
                            <h3>Price</h3>
                            <p>{price}$</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i className="fa-solid fa-minus minus"></i>
                        <input type='text' placeholder='3'></input>
                        <i className="fa-solid fa-plus add"></i>
                        </div>
                        <div className='delete-item'>
                            <button type="button" className="btn-close" aria-label="Close" onClick={()=>removeItem(id)}></button>
                        </div>
            
                    </div>

                    <hr></hr>
    </>
  )
}

export default Items