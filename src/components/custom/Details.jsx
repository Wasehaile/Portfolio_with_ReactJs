import React from 'react'

function Details({
    title,
    description,
    Right,
}) {
  
  const right=Right;
  return (
    <>
    {right ? <div className='flex my-20'>
        <div className='flex-1 ml-4 '>
            <h1 className='text-primary text-4xl font-bold mb-5'>{title}</h1>
            <p className='text-primary text-2xl font-extralight'>{description}</p>
        </div>
        <div className='flex-1'>
            left
        </div>
    </div>:<div className='flex my-20'>
        <div className='flex-1 ml-4'>
            left
        </div>
        <div className='flex-1 ml-4'>
        <h1 className='text-primary text-4xl font-bold mb-5'>{title}</h1>
            <p className='text-primary text-2xl font-extralight'>{description}</p>
        </div>
    </div>}
    </>
    
  )
}

export default Details