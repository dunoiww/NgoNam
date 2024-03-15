import React from 'react'

export default function Blogs({imageURL, title, description, content, comments}) {
  return (
    <div className='shadow-lg'>
        <img src={imageURL} alt={title} className='w-full'/>

        <div className='space-y-4 mx-3'>
            <h1 className='mt-2 font-semibold'>{title}</h1>

            <p>{description}, <span className='text-gray-300'>April 7, 2024</span></p>

            <p>
                {content}
            </p>
            <div className='flex justify-between py-3'>
                <button className='p-2 border-[1px] hover:bg-gray-300'>
                    READ MORE »
                </button>

                <div>
                    Comments <span className='p-1 px-2 rounded-lg bg-black text-white'>{comments}</span>
                </div>
            </div>

        </div>

    </div>
  )
}