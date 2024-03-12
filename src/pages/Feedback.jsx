import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Feedback = () => {

    const navigate = useNavigate();
    const [comment,setComment] = useState("");

    function changeHandler(e){
        setComment(e.target.value);
    }

    function skipHandler(e){
        e.preventDefault();
        navigate("/");
    }

    function submitHandler(e){
        e.preventDefault();
        if(comment){
            navigate("/");
            toast.success("Thanks for the feedback!");
        }
        else{
            toast.error("Give your feedback!");
        }
    }



  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-r from-slate-900 to-slate-700'>

        <div className='w-8/12 mx-auto flex flex-col gap-7 pt-16'>
            
            <h2 className='text-2xl text-center text-white font-baloo mb-10 tracking-wide'>
                Congratulations! The amount has been successfully credited to <span>AlphaX</span>.
            </h2>
            
            {/* feedback-form */}
            <div className='w-[30vw] mx-auto flex flex-col gap-5'>
                <div className='flex flex-col items-start'>
                    <h2 className='text-2xl text-blue-400 font-krona font-medium tracking-wide'>Please rate the service</h2>
                    <p className='text-sm text-gray-300 font-krona font-medium tracking-wide'>Your opinion is important to us</p>
                </div>
                <form action='#' className='w-full flex flex-col gap-5'>
                    <textarea rows="8" cols="40" placeholder='Your comment'
                    className='w-full border-none rounded-lg p-3 font-roboto
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700'
                    onChange={changeHandler}
                    >

                    </textarea>
                    <div className='w-full flex flex-row justify-center items-center gap-5 px-1'>
                        <button className='text-md font-roboto px-3 py-2 bg-[#000] text-white rounded-md
                        hover:bg-[#fff] hover:text-[#000] transition-all duration-200 ease'
                        onClick={skipHandler}
                        >
                            skip
                        </button>
                        <button className='text-md font-roboto px-3 py-2 bg-[#000] text-white rounded-md
                        hover:bg-[#fff] hover:text-[#000] transition-all duration-200 ease'
                        onClick={submitHandler}>
                            submit
                        </button>
                    </div>
                </form>
            </div>


        </div>

    </div>
  )
}
