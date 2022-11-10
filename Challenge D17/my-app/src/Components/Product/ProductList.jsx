import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product'
import ProductSummaryButton from './ProductSummaryButton';
import './style.css'

const productArray = [
    {
      id: 0,
      name: "Buzo",
      price: "250",
      description: "Un buzito re piola."
    },
    {
      id: 1,
      name: "Campera",
      price: "407",
      description: "Camperita pal fresco."
    },
    {
      id: 2,
      name: "Ojotas",
      price: "379",
      description: "Ojo con estas ojotas."
    }
  ];

  

export default function ProductList() {
    const [showSummary , setShowSummary] = useState(false);

    

  return (
    <>
    <div className='product-list'>
    {productArray.map((product) =>{
        return <Product key={product.id} name={product.name} price={product.price} description={product.description} />        
    })}
    </div>
    <ProductSummaryButton />
    </>
  )
}
