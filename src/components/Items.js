import React from 'react'
import './cart.css' //css file

const Items = () => {
  return (
    <>
      <div className='items-info'>
                        <div className='product-img'>
                            <img src='./images/Products/Panjabi-1.jpg' alt='image'></img>
                        </div>
                        <div className='title'>
                            <h2>Blue Panjabi</h2>
                            <p>Blue</p>
                        </div>
                        <div className='title'>
                            <h3>Price</h3>
                            <p>35.00$</p>
                        </div>
                        <div className='title'>
                            <h3>Stock</h3>
                            <p><i class="fa-solid fa-circle-check"></i>In Stock</p>
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