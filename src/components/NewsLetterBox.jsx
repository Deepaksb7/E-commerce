import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
      event.preventDefault()
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
        <p className='text-gray-400 mt-3'>"Be the first to hear about exclusive deals, new arrivals, and more."</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3' >
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
          <button className='bg-black text-white text-xs px-10 py-4 cursor-pointer' type="submit">SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
