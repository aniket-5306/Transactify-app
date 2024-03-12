import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#1a202c]'>

      <div className='w-6/12 flex flex-col mx-auto pt-7 pb-16'>

        <div className='flex flex-col gap-1 my-7 text-white'>
          <h1 className='text-5xl font-baloo tracking-wide'>Contact me</h1>
          <p className='text-3xl font-baloo tracking-wide'>Questions, Thoughts, Or Just Want To Say Hello?</p>
        </div>

        <form action='#' 
              className='w-full flex flex-col gap-5 mt-7 rounded-lg bg-orange-300 px-7 py-10'
        >
          <input 
            type='text' required
            placeholder='Enter your name'
            className='w-full px-5 py-3 rounded-md font-roboto text-lg shadow-lg
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700'
          />
          <input
            type='email' required
            placeholder='Enter your email id'
            className='w-full px-5 py-3 rounded-md font-roboto text-lg shadow-lg
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700'
          />
          <input 
            type='text' 
            placeholder='Enter subject of your message' 
            className='w-full px-5 py-3 rounded-md font-roboto text-lg shadow-lg
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700' 
          />
          <textarea 
          placeholder='Enter your message' 
          required
          rows="8" 
          cols="40" 
          className='w-full px-5 py-3 rounded-md font-roboto text-lg shadow-xl
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700'
          >

          </textarea>  
          <button 
            className='contact-btn w-[12rem] bg-[#e84949] flex flex-row gap-2 justify-center items-center px-3 py-2 mt-5 
              rounded-sm text-white text-lg'
          >
            <p>Send Message</p>
            <FaPaperPlane />
          </button>
        </form>

      </div>

    </div>
  )
}
