import React from 'react'
import './style.css'

export default function Product(props) {
  return (
    <>
    <div className='product'>
        <div className='product-nombre'>{props.name}</div>
        <div className='product-price'>{props.price}</div>
        <div className='product-description'>{props.description}</div>
    </div>
    </>
  )
}
