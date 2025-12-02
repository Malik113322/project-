import React from 'react';
import NAV_ICON from "../assets/Mask group.svg";

const Header = () => {
  return (
    <div>
        <nav className=''>
            <ul className='flex justify-between p-[31px] items-center '>
               <div className='flex gap-[50px]'>
                 <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Resources</li>
               </div>
               <div>
                <li className='font-bold text-[25px]'><img className='inline' src={NAV_ICON} alt="ICON" />Circle</li>
               </div>
               
               <div className='flex gap-[50px] items-center '>
                <li>Company</li>
                <li>Contact</li>
                <button className='border text-[#0CBBC7] w-[138px] h-[38px] items-center'>Login</button>

               </div>
            </ul>
        </nav>
    </div>
  )
}

export default Header