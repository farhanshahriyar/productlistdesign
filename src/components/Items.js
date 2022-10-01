import React, { useContext, useEffect, useState } from 'react'
import './cart.css' //css file
import { CartContext } from './Cart';
import products from './Products';

const Items = ({ id, name, image, color, price, countInStock, setItems, items, quantity, index }) => {
    const { removeItem } = useContext(CartContext);
    const [myQuantity, setMyQuantity] = useState(0)
    useEffect(() => {
        if (quantity) {
            setMyQuantity(quantity)
        }
    }, [quantity])
    const handleQuantity = (params) => {
        let newQuantity = myQuantity
        if (params === 'plus') {
            newQuantity++
        } else {
            newQuantity--
        }
        if (newQuantity === 0) {
            const newCart = items.filter(item => item.id !== id)
            setItems(newCart)
        } else {
            const currentCart = { id, name, image, color, price, countInStock, quantity: newQuantity }
            const newCart = items.filter(item => item.id !== id)
            const copy = [...newCart]
            copy.splice(index, 0, currentCart)

            setItems(copy)
        }

    }
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
                    <i className="fa-solid fa-minus minus" onClick={() => handleQuantity('minus')}></i>
                    <input type='text' value={quantity}></input>
                    <i className="fa-solid fa-plus add" onClick={() => handleQuantity('plus')}></i>
                </div>
                <div className='delete-item'>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                        const rest = items.filter(item => item.id !== id)
                        // console.log(rest)
                        setItems(rest)
                    }}></button>
                </div>

            </div>

            <hr></hr>
        </>
    )
}

export default Items