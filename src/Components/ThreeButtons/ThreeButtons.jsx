import React from 'react'
import CusTomeButton from '../CusTomeButton/CusTomeButton'

function ThreeButtons() {
  return (
    <div className='flex gap-2 flex-col' >
       <CusTomeButton variant="primary" />
      <CusTomeButton variant="secondary" />
      <CusTomeButton variant="third" />
      
    </div>
  )
}

export default ThreeButtons
