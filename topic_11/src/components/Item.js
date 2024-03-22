import React from 'react'

function Item({item}) {
  return (
    <div className='bg-white rounded-xl shadow-md mb-4 px-2 py-3 mx-auto' style={{width: 250}}>
        <div className='flex items-center justify-center py-2'>
            <img src={item.image} alt={item.title} className='h-32 w-32 object-contain'/>
        </div>
        <hr />
        <div>
            <h3 className='line-clamp-1'>{item.title}</h3>
            <p className='text-sm text-gray-500 line-clamp-2'>{item.description}</p>
            <p className='text-lg font-bold text-red-800'>${item.price}</p>
        </div>
    </div>
  )
}

export default Item