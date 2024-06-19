import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[80vh] gap-y-4'>
      <div className='loader'></div>
      <p className='text-[#fc5011] text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner;