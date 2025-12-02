import React from 'react';
import Image_New from "../assets/image 40.png"

const MoreThings = () => {
  return (
   <div className='flex mt-30 justify-center p-20 gap-25'>
   <div>
    <div className='flex flex-col gap-10 '>
        <p className='text-xs'>OUR PROMISE</p>
    <p className='text-3xl'>Tool <span className='font-bold'>built for people.</span></p>
    <p>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.</p>
   <p>Circle has 100+ integrations with tools you already use and love.</p>
   <button className='w-50 border h-12'>Get started free</button>
    </div>
   </div>

   <div>
    <img className="rounded-2xl" src={Image_New} alt="" />
   </div>
   </div>
  )
}

export default MoreThings