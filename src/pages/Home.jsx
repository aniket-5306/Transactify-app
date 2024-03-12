import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserTie, FaRegHandshake } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import macbookImg from '../assets/macbook.png'
import indianFlag from '../assets/indianFlag.png'

export const Home = ({isLoggedIn}) => {
  return (
    <div>

      {/* banner-section */}
     <div className='banner-section flex items-center justify-center'>
      <div className='max-w-[40vw] text-center text-white flex flex-col items-center justify-center'>
          <div className='flex flex-col p-3 gap-2 mb-5 font-baloo'>
            <h1 className='text-5xl font-semibold'>Pay with Transactify.</h1>
            <h2 className='text-4xl font-semibold'>Don't worry Safe Hai.</h2>
          </div>
          <p className='text-xl font-baloo mt-5 mb-3'>
            Wherever you shop online worldwide, a Transactify account lets you check out safer, faster and easier payment.
          </p>
          {
            !isLoggedIn && 
            <Link to="/signup">
              <button
              className='signup-btn bg-[#0070ba] my-7 px-7 py-2 rounded-sm text-lg font-baloo text-[#fff] font-semibold'
              >Sign up for free</button>
            </Link>
          }
      </div>
     </div>


     {/* services-section */}
      <div className='w-full h-[80vh] bg-[#fff]'>
        <div className='w-11/12 h-full mx-auto flex flex-col gap-7 justify-evenly items-center'>

          <h2 className='text-4xl text-[#444] text-center font-medium font-baloo'>
            Transactify is for Everyone who pays and gets paid
          </h2>

          <div className='w-full flex flex-row flex-wrap justify-evenly'>
            <div className='w-[20rem] flex flex-col items-center gap-7'>
              <FaUserTie color='#229fe7' className='text-[5rem]'/>
              <h2 className='text-3xl font-baloo'>Individuals</h2>
              <p className='text-center text-md'>
              Individuals on transactify can get services like bill payments, money transfers, peer-to-peer payments and so on.
              </p>
              <button
              className='border-[1px] border-[#0070ba] px-3 py-2 rounded-full text-sm text-[#0070ba] font-semibold hover:shadow-md'
              >
                Learn More
              </button>
            </div>
            <div className='w-[20rem] flex flex-col items-center gap-7'>
              <TbBriefcaseFilled color='#229fe7' className='text-[5rem]'/>
              <h2 className='text-3xl font-baloo'>Businesses</h2>
              <p className='text-center text-md'>
              Businesses on transactify can access features like accepting payments, invoicing, managing inventory and so on.
              </p>
              <button
              className='border-[1px] border-[#0070ba] px-3 py-2 rounded-full text-sm text-[#0070ba] font-semibold hover:shadow-md'
              >
                Learn More
              </button>
            </div>
            <div className='w-[20rem] flex flex-col items-center gap-7'>
              <FaRegHandshake color='#229fe7' className='text-[5rem]'/>
              <h2 className='text-3xl font-baloo'>Partners</h2>
              <p className='text-center text-md'>           
              Partners on transactify can get benefits like revenue sharing, marketing opportunities, and enhanced brand visibility.
              </p>
              <button
              className='border-[1px] border-[#0070ba] px-3 py-2 rounded-full text-sm text-[#0070ba] font-semibold hover:shadow-md'
              >
                Learn More
              </button>
            </div>          
          </div>

        </div>
      </div>

     {/* features-section */}
      <div className='w-full h-[90vh] bg-gradient-to-r from-violet-600 to bg-indigo-600'>
        <div className='w-11/12 h-full mx-auto flex flex-col justify-evenly items-center'>

          <h2 className='text-5xl text-center text-[#fff] font-baloo opacity-90 mt-7 mb-7'>
            The world prefers Transactify
          </h2>

          <div>
            <div className='w-full flex flex-row justify-evenly items-center flex-wrap gap-7 p-7'>
              <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  Advanced Protection
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                  Transactify provides a high level of security measures to safeguard users' financial information and transactions.
                </p>
              </div>

              <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  Fast Payments
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                  Transactify provides fast payments with minimal delay, typically completing within seconds or minutes.     
                </p>
              </div>

              <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  Global Reach
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                Transactify has the ability to facilitate transactions and financial services across international borders.      
                </p>
              </div>
            </div>

            <div className='w-full flex flex-row justify-evenly items-center flex-wrap gap-7 p-7'>
            <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  Easy Integration
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                It involves providing developers with well-documented APIs, SDKs, and plugins, allowing them to integrate payment features quickly and efficiently into their websites, applications, or services.      
                </p>
              </div>

              <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  Simple and Convenient
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                Transactify provides straightforward navigation, intuitive design, and streamlined processes, ensuring that users can perform transactions and access services with minimal effort and hassle.      
                </p>
              </div>

              <div className='w-[20rem] flex flex-col gap-5'>
                <h2 className='text-3xl text-center text-white font-baloo tracking-wide'>
                  24/7 Service
                </h2>
                <p className='text-md text-center text-white font-baloo'>
                Transactify provides uninterrupted availability and support for users throughout all hours of the day and night. This ensures that users can conduct transactions at any time, enhancing reliability and convenience.      
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

     {/* how transactify works  */}
     <div className='w-full h-[80vh] bg-[#fff]'>
          <div className='w-11/12 h-full mx-auto flex flex-col justify-evenly'>
            <h2 className='text-4xl text-center text-[#444] font-baloo mt-7 mb-7'>
              Get Started with Transactify.
            </h2>

            <div className='w-full flex flex-row justify-evenly'>
              <div className='flex justify-center items-center'>
                <img src={macbookImg} width={600} alt='lappy'/>
              </div>

              <div className='flex flex-col justify-center gap-7'>
                <div className='flex flex-row gap-5'>
                  <div className='w-[3rem] h-[3rem] border-[1px] border-[#0070ba] 
                  flex justify-center items-center rounded-full select-none hover:shadow-md'>
                    1
                  </div>
                  <div>
                    <p className='text-md font-baloo'>Sign up</p>
                    <p className='text-md font-baloo'>It's free and only takes a few minutes</p>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <div className='w-[3rem] h-[3rem] border-[1px] border-[#0070ba] 
                  flex justify-center items-center rounded-full select-none hover:shadow-md'>
                    2
                  </div>
                  <div>
                    <p className='text-md font-baloo'>Link a credit / debit card</p>
                    <p className='text-md font-baloo'>You only have to do it once</p>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <div className='w-[3rem] h-[3rem] border-[1px] border-[#0070ba] 
                  flex justify-center items-center rounded-full select-none hover:shadow-md'>
                    3
                  </div>
                  <div>
                    <p className='text-md font-baloo'>Pay with Transactify at your favourite brands</p>
                    <p className='text-md font-baloo'>Wherever you see the Transactify button</p>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <div className='w-[3rem] h-[3rem] border-[1px] border-[#0070ba] 
                  flex justify-center items-center rounded-full select-none hover:shadow-md'>
                    4
                  </div>
                  <div>
                    <p className='text-md font-baloo'>Receive email receipt of your purchase</p>
                    <p className='text-md font-baloo'>The seller will fulfil your order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>

     {/* get started */}
     {
      !isLoggedIn &&
      <div className='w-full h-[50vh] bg-[#f3f7fa]'>
            <div className='w-11/12 h-full mx-auto flex flex-col items-center justify-center gap-5'>
              <h2 className='text-4xl text-center text-[#000] font-baloo'>
                Sign Up and Get Started
              </h2>
              <Link to="/signup">
                <button
                className='signup-btn bg-[#0070ba] my-5 px-[5rem] py-2 rounded-sm text-lg font-baloo text-[#fff] font-semibold'
                >
                  Sign up now
                </button>
              </Link>
            </div>
      </div>
     }

     {/* footer-section */}
     <footer className='w-full h-[30vh] bg-[#1a202c]'>
      <div className='w-9/12 h-full mx-auto flex flex-col justify-center'>
        <div className='flex flex-row justify-between items-center border-b-[1px] pb-2'>
          <div className='flex flex-row gap-7 font-baloo text-md text-[#fff] font-semibold'>
            <p className='font-baloo text-md cursor-pointer'>Help</p>
            <Link to="/contact">
              <p className='font-baloo text-md cursor-pointer'>Contact</p>
            </Link>
            <p className='font-baloo text-md cursor-pointer'>Fees</p>
            <p className='font-baloo text-md cursor-pointer'>Security</p>
            <p className='font-baloo text-md cursor-pointer'>Shop</p>
          </div>
          <div>
            <img src={indianFlag} width={30} alt='indianFlag'/>
          </div>
        </div>
        <div className='pt-2 text-[#fff] text-center select-none'>
            <p>Copyright <span>&#169;</span> All Rights Reserved</p>
        </div>
      </div>
     </footer>

    </div>
  )
}
