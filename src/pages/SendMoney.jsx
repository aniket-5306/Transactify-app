import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const SendMoney = () => {

    const navigate = useNavigate();
    const [money, setMoney] = useState(0);

    function changeHandler(e){
        setMoney(e.target.value);
    }

    function sendBtnHandler(e){
        e.preventDefault();
        if(money > 0){
            navigate("/feedback");
            toast.success("Amount Credited!");
        }
        else{
            toast.error("Amount must be greater than 0");
        }
    }

  return (
    <div className='send-money w-full min-h-screen flex justify-center items-center'>
        <div className='send-money-box flex flex-col justify-evenly gap-5 text-[#fff] px-5'>
            <h2 className='text-center text-4xl tracking-wide font-baloo pt-7 pb-2'>Send Money</h2>
            <p className='text-xl font-baloo'>To : <span>AlphaX</span></p>
            <form action='#' className='w-full flex flex-col items-start justify-center gap-1'>
                {/* <p className='text-lg font-baloo'></p> */}
                <input 
                    type='number'
                    placeholder='Enter an Amount( &#8377; )'
                    className='w-full px-5 py-2 rounded-sm outline-none text-[#000] text-xl font-baloo'
                    onChange={changeHandler}
                />
                <button className='send-btn w-full flex flex-row justify-center items-center gap-2 
                    bg-[#e84949] py-2 my-3 rounded-sm text-white text-xl'
                    onClick={sendBtnHandler}
                    >
                    <p>Send</p>
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    </div>
  )
}
