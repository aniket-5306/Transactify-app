import React from 'react'
import { Link } from 'react-router-dom'
import transactifyLogo from '../assets/transactifyLogo.png'
import toast from 'react-hot-toast'

export const NavBar = ({isLoggedIn,setIsLoggedIn}) => {

  function logoutBtnHandler(event){
    setIsLoggedIn(false);
    toast.success("Logged Out!");
  }


  return (
    <div className='container w-full h-[5rem] mx-auto border-b-[0.2px] bg-[#fff]'>
      <div className='w-11/12 h-full mx-auto flex flex-row justify-between px-5 items-center'>
        {/* logo */}
        <div>
          <Link to="/">
            <img src={transactifyLogo} width={60} alt='logo'/>
          </Link>
        </div>
        
        {/* links */}
        <div className='h-full font-baloo flex flex-row items-center gap-7 relative'>
          <div className='group w-[4rem] h-full flex flex-row items-center justify-center relative'>
            <Link to="/">
              <p className='px-7 text-md uppercase'>Home</p>
            </Link>
            <div className='h-[3px] w-full absolute bottom-[-0.5px] group-hover:bg-[#0070ba] transition-all duration-200'></div>
          </div>
          <div className='group w-[4rem] h-full flex flex-row items-center justify-center relative'>
            <Link to="/about">
              <p className='px-7 text-md uppercase'>About</p>
            </Link>
            <div className='h-[3px] w-full absolute bottom-[-0.5px] group-hover:bg-[#0070ba] transition-all duration-200'></div>
          </div>
          <div className='group w-[4rem] h-full flex flex-row items-center justify-center relative'>
            <Link to="/contact">
              <p className='px-7 text-md uppercase'>Contact</p>
            </Link>
            <div className='h-[3px] w-full absolute bottom-[-0.5px] group-hover:bg-[#0070ba] transition-all duration-200'></div>
          </div>
        </div>

        {/* signup, login & dashboard */}
        <div>
          {
            !isLoggedIn ?
            (
              <div className='flex flex-row items-center gap-3'>
                <Link to="/login">
                  <button
                  className='border-[1px] border-[#0070ba] px-3 py-2 rounded-full text-sm text-[#0070ba] font-semibold'
                  >Log In</button>
                </Link>
                <Link to="/signup">
                  <button
                  className='border-[1px] bg-[#0070ba] px-3 py-2 rounded-full text-sm text-[#fff] font-semibold
                  hover:bg-opacity-90'
                  >Sign Up</button>
                </Link>
              </div>
            )
            :
            (
              <div className='flex flex-row items-center gap-3'>
                <Link to="/dashboard">
                  <button
                  className='border-[1px] bg-[#1a202c] px-5 py-2 rounded-full text-sm text-[#fff] font-semibold
                  hover:bg-opacity-90'
                  >
                    Dashboard
                  </button>
                </Link>
                <button
                className='border-[1px] border-[#0070ba] px-3 py-2 rounded-full text-sm text-[#0070ba] font-semibold'
                onClick={logoutBtnHandler}
                >
                  Log Out
                </button>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}
