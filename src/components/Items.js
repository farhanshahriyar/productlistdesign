import React from 'react'
import './cart.css' //css file

const Items = ({name,image,color,price,countInStock}) => {
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
                            <h3>Price</h3>
                            <p>{price}$</p>
                        </div>
                        <div className='title'>
                            <h3>Stock</h3>
                            <p><i class="fa-solid fa-circle-check"></i>{countInStock}</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i class="fa-solid fa-minus minus"></i>
                        <input type='text' placeholder='3'></input>
                        <i class="fa-solid fa-plus add"></i>
                        </div>
            
                    </div>

                    <hr></hr>
    </>
  )
}

export default Items