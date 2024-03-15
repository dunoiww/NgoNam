import React, { useState } from 'react'

export default function Panel({title, posts, tags, isTags = false}) {
    const [tagActive, setTagActive] = useState('Travel')
    const handleClick = (e) => {
        const buttonContent = e.target.textContent;
        setTagActive(buttonContent)
    }
  return (
    <div className='shadow-lg'>
        <div style={{backgroundColor: '#f1f1f1'}}>
            <div className='py-4 px-3 flex items-center'>
                <h2 className='' style={{fontWeight: 400}}>{title}</h2>
            </div>

            {
                isTags ? (
                    <div className='bg-white'>
                        <div className='mx-3 py-2 flex flex-wrap'>
                            {tags.map((tag, index) => {
                                let btnStyle = tagActive === tag ? 'bg-black' : 'bg-gray-100'
                                let textStyle = tagActive === tag ? 'text-white' : 'text-black'
                                return (
                                    <div key={index} className={'p-1 my-2 mx-[2px] ' + btnStyle}>
                                        <button onClick={handleClick} className={'text-xs ' + textStyle}>{tag}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    <div className='bg-white'>
                        {posts.map((post, index) => {
                            let showLine = index === 0;
                            let line = showLine ? '' : 'border-t-[1px]'
                            return (
                                <div key={index} className={'flex gap-1 items-center hover:bg-gray-200 ' + line}>
                                    <img src={post.imageURL} alt={post.title} width={50} className='m-3'/>
                                    <div>
                                        <p>{post.title}</p>
                                        <p>{post.description}</p>
                                    </div>
                                    <hr className='border-black border-t-2'/>
                                </div>
                            )
                        })}
                    </div>
                )
            }

        </div>
    </div>    
  )
}