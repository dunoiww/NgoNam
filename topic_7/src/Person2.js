import React from 'react'
import UpdatedComponent from './HOC'

function Person2({money, handleIncrease}) {
  return (
    <div>
        <h2>ABC's money: {money}</h2>
        <button onClick={handleIncrease}>Increase money</button>
    </div>
  )
}

export default UpdatedComponent(Person2)