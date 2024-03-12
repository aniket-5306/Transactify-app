import React, { useState } from 'react'
import Users from '../components/Users'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

export const Dashboard = () => {

    const [currentBalance, setCurrentBalance] = useState(1082.99);

  return (
    <div className='w-full min-h-screen bg-[#EAEAEA]'>
        <div className='w-10/12 mx-auto flex flex-row justify-evenly'>
            {/* search-users */}
            <div className='w-[50%] h-[70vh] flex flex-col items-center gap-10 border-r-[1px] border-slate-500 pr-24 mt-16'>
                <div className='w-full relative'>
                    <input type='text' placeholder='search users'
                        className='w-full px-5 py-3 rounded-md font-baloo text-lg shadow-lg
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-slate-700'
                    />
                    <CiSearch className='absolute text-[1.7rem] text-slate-500 top-[50%] -translate-y-[50%] right-[1rem] select-none cursor-pointer'/>
                </div>
                {/* fetch-all-users */}
                <Users/>
            </div>

            {/* wallet */}
            <div className='w-[30%]'>
                <div className='w-full h-[35vh] flex flex-col items-center justify-between gap-3
                rounded-xl bg-gradient-to-br from-sky-700 to-cyan-400 ml-7 mt-16 py-5'>
                    <h2 className='text-2xl text-[#fff] font-roboto'>Wallet Balance</h2>
                    <div>
                        <p className='flex flex-row items-center text-4xl font-medium text-[#fff] font-roboto'>
                            <span className='pr-1'>&#8377;</span>
                            {currentBalance}
                        </p>
                    </div>
                    <Link to="/addMoney">
                        <button 
                        className='send-btn bg-[#e84949] text-white py-2 px-5 rounded-sm select-none'>
                            Add Money
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
