import React, { useContext, useState } from 'react'
import Customize from './Customize.js'
import Scrollbars from 'react-custom-scrollbars-2'
import Items from './Items'
import Product from './Products'
import { CartContext}  from './Cart.js'

const MainCart = () => {
    const [items, setItems] = useState(Product);
    const { item } = useContext(CartContext);
  return (
    <>
         <header>
            <div className='continue-shopping'>
                <img src='./images/Icons/arrow.png' className='arrow-icon'></img>
                <h3>Reven Store</h3>
            </div>
            <div className='cart-icon'>
                <img src='./images/Icons/cart.png'></img>
                <p className='cartIconNumber'>6</p>
            </div>
        </header>
        <section className='main-cart-section'>
            <h1>Shopping Cart</h1>
            <p className='total-items'>you have <span className='total-items-count'>6</span> exactly items in shopping cart</p>
            {/* inside this span it will be dynamic numbers */}
            <Customize></Customize>
            <div className='cart-items'>
                <div className='cart-items-container'>
                   <Scrollbars>
                       {
                           items.map((curItem)=>{
                                return <Items key={curItem.id} {...curItem}/>
                           })
                       }
                       
                </Scrollbars>
                </div>
            </div>
            <div className='card-total'>
                <h3>Cart Total: <span>210$</span></h3>
                <hr></hr>
                    {/* inside this span it will be dynamic numbers */}
                <button>Proceed To Check Out</button>
            </div>
        </section>
    </>
  )
}

export default MainCart