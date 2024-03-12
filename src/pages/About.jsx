import React from 'react'
import aboutImg from '../assets/about.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <div className='w-full min-h-screen bg-[#EAEAEA] flex justify-center items-center'>
      <div className='w-8/12 h-[80vh] mx-auto flex flex-row justify-between relative'>
        <div className='h-full w-[45%]'>

          <img src={aboutImg} alt='about_img' className='w-full h-[90%]' loading='lazy' />

          <ul className='w-full flex flex-row justify-end items-center gap-5 py-2 pr-2'>
            <li className='item flex justify-center items-center'>
              <a href='https://www.instagram.com/aniket.forever?igsh=eTRoOHZ0OWE0eXRq' 
              target='_blank' rel='noreferrer'>
                <FaInstagram className='icon'/>
              </a>
            </li>
            <li className='item flex justify-center items-center'>
              <a href='https://www.linkedin.com/in/aniket-kumar-5965b01b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
              target='_blank' rel='noreferrer'>
                <FaLinkedin className='icon'/>
              </a>
            </li>
            <li className='item flex justify-center items-center'>
              <a href='https://x.com/anikett5306?t=VkWjlPWp7UP5iEZVS6viqA&s=09' 
              target='_blank' rel='noreferrer'>
                <FaXTwitter className='icon'/>
              </a>
            </li>
          </ul>
        </div>

        <div className='w-[50%] h-full relative flex items-center px-5'>
          <h2 className='absolute text-8xl font-krona font-medium tracking-wide uppercase top-7 -left-52 text-[rgb(43,44,50)]'>
            About us
          </h2>
          <div className='flex flex-col gap-5'>
            <p className='text-md font-baloo pt-20'>  
              Welcome to Transactify, your go-to destination for seamless, secure, and swift digital transactions. At Transactify, we understand the importance of simplicity and reliability when it comes to managing your finances. Whether you're a business owner, a freelancer, or an individual looking to effortlessly handle your payments, Transactify has got you covered.
            </p>
            <div>
              <h5 className='text-md font-krona'>Our Mission:</h5>
              <p className='text-md font-baloo pt-3'>
                At Transactify, our mission is to revolutionize the way you handle transactions, making it easier, faster, and safer for you to manage your money. We strive to empower individuals and businesses alike by providing innovative payment solutions that streamline processes and enhance financial efficiency.
              </p>
            </div>
          </div>
          <div className='w-[7rem] h-4 bg-black absolute bottom-0 right-0'></div>
        </div>
      </div>
    </div>
  )
}


