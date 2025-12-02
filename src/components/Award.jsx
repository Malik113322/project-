import React from 'react';

import award_image1 from "../assets/image 23.png";
import award_image2 from "../assets/image 26.png";
import award_image3 from "../assets/image 27.png";
import award_image4 from "../assets/image 31.png";
import award_image5 from "../assets/image 32.png";

const Award = () => {
  return (
    <div className='text-center h-100'>
        <p className='text-xs mb-20'>AWARDS</p>
        <p className='text-3xl'>An <span className='font-bold'>award winning</span> platform, <span className='font-bold'>loved by customers</span>.</p>
    <div className="flex justify-center gap-10 mt-20">
        <div className="flex justify-center border ">
            <img src={award_image1} alt="" />
        </div>
        <div className="flex justify-center border w-50">
            <img src={award_image2} alt="" />
        </div>
        <div className="flex justify-center border w-50">
            <img src={award_image3} alt="" />
        </div>
        <div className="flex justify-center border w-50">
            <img src={award_image4} alt="" />
        </div>
        <div className="flex justify-center border w-50">
            <img src={award_image5} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Award