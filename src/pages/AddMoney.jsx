import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const AddMoney = () => {

    const navigate = useNavigate();
    const [money,setMoney] = useState();

    function changeHandler(e){
        setMoney(e.target.value);
    }

    function depositBtnHandler(e){
        e.preventDefault();
        if(money > 0){
            navigate("/dashboard");
            toast.success("Money Deposited!");
        }
        else{
            toast.error("Amount must be greater than 0");
        }
    }


  return (
    <div className='add-money w-full min-h-screen flex justify-center items-center'>
        <div className='add-money-box flex flex-col justify-evenly gap-5 text-[#fff] px-5'>
            <h2 className='text-center text-4xl tracking-wide font-baloo pt-7 pb-2'>Add Money</h2>
            <p className='text-xl font-baloo'>To : <span>Self</span></p>
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
                onClick={depositBtnHandler}    
                >
                    <p>Deposit</p>
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    </div>
  )
}
