import React from 'react'

function MyCards(
    {
        title,
        image,
        body,
        pics,
    }
) {
  return (
    <div className='flex m-4 mt-10'>
        <div className='bg-white w-72 h-1/2  text-primary shadow-lg rounded-xl hover:bg-primary hover:w-72 hover:text-white  transition-all'>
         <h1 className='m-4'>{title}</h1>
         <div className='m-4 my-5 bg-secondary w-20 h-0.5 transition-all'/>
         <div className='flex mt-10  flex-col items-center'>
         <img className='w-40' src={image} alt="" />
         <div className=' text-center'>{body}</div>
        <div className='flex-wrap flex justify-center m-3'>{pics}</div>
        </div>
        </div>
    </div>
  )
}

export default MyCards