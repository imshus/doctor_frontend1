import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>A doctor appointment summary typically includes an overview of the key points discussed during the visit, ensuring clarity on the diagnosis, recommended treatments, and any follow-up steps. It begins with patient details such as name, age, and the reason for the visit. The summary then outlines the findings from the consultation, including vital signs, test results, and the doctor’s observations.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8084286876</li>
            <li>shudhanshukumar69@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Shudhanshu Kumar - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
