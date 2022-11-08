import React from 'react'
import { useState } from 'react'

export default function ProductSummaryButton() {
    const [clicked , setClicked] = useState(false);

    function handleClickProductSummaryButton() {
        clicked = setClicked(!clicked);
    }

  return (
    <button className='productSummaryButton' onClick={handleClickProductSummaryButton}>Resúmen de productos</button>
  )
}
