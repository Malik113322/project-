import React from 'react'

import Hero_Image from "../assets/Hero.png";

const Hero = () => {

    return (
        <div className='text-center m-auto py-10 flex flex-col items-center'>
            <h1 className='text-3xl font-bold h-[110px]'>A powerful online engagement tool <br />that’s intuitive and simple to use.</h1>
            <p className='px-20 text-xs text-[#878787]'>With stellar one-click reports and unmatched support, see how <br />Circle will make a difference in your business.</p>
            <button className='my-[30px] h-12 text-white bg-[#0CBBC7] w-[188px]'>Get started free </button>

            <div className='mt-20'>
                <img src={Hero_Image} alt="hero-section" />
            </div>

        </div>
    )
}

export default Hero