import React from 'react'

import Companies_Image1 from "../assets/image 14.png";
import Companies_Image2 from "../assets/image 15.png";
import Companies_Image3 from "../assets/image 16.png";
import Companies_Image4 from "../assets/image 17.png";
import Companies_Image5 from "../assets/image 18.png";
import Companies_Image6 from "../assets/image 19.png";

const Companies = () => {
  return (
    <div className='text-center h-70 py-20'>
        <p className='mb-20'>Our Customers</p>
        <p className='mb-15'>Trusted by <span className='font-bold'>100,000+ customers</span> in 90+ countries</p>
    <div className='flex  gap-18 justify-center'>
        <img className='object-contain' src={Companies_Image1} alt="companies" />
         <img className='object-contain' src={Companies_Image2} alt="companies" />
          <img className='object-contain' src={Companies_Image3} alt="companies" />
           <img className='object-contain' src={Companies_Image4} alt="companies" />
            <img className='object-contain' src={Companies_Image5} alt="companies" />
             <img className='object-contain' src={Companies_Image6} alt="companies" />
    </div>

    <div className='flex justify-center gap-20 text-xs p-5'>

   <span>18281  signed up last month</span>
   <span>GDPR- & CCPA-ready</span>
   <span>Leader@G2 Summer</span>
    </div>
    </div>
  )
}

export default Companies