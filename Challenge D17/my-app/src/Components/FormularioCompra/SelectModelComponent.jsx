import React from 'react'
import { useState } from 'react'

export default function SelectModelComponent() {
  
  const [model, setModel] = useState("Modelo A");

  const handleChange = (event)=>{
    setModel(event.target.value)
  }
  
    return (
    <>
    <form>
        <select value={model} onChange={handleChange}>
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
            <option value="Model C">Model C</option>
        </select>
    </form>
    </>
  )
}
