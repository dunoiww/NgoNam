import React from 'react'
import { ThreeDot } from 'react-loading-indicators'

function Loading() {
  return (
    <div className='flex justify-center items-center h-40'>
      <ThreeDot  color="blue" size="medium" text="" textColor="" />
    </div>
  )
}

export default Loading