import React from 'react';
import banner from '../../../public/hero.svg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className="lg:px-0 px-3 ">
        <div className='grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5'>
            {/* Image Div */}
            <div className='flex justify-center items-center lg:hidden'>
                <Image className='rounded-full' src={banner}></Image>
            </div>
    
            {/* Content Div */}
            <div className='lg:space-y-3 space-y-2'>
                <p className='lg:text-5xl text-3xl font-bold'>We're <span className='text-[#F54748]'>Serious</span>  For </p>
                <p className='lg:text-5xl text-3xl font-bold'><span className='text-[#F54748]'>Food</span> & <span className='text-[#FDC55E]'>Delivery</span></p>
                <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                <input type="text" placeholder="Search food" className="input input-bordered w-full max-w-xs" />
                <div className='flex items-center gap-3'>
                    <button className='btn btn-sm hover:bg-[#FDC55E] bg-[#F54748] text-white'>Download App</button>
                </div>
            </div>
    
            {/* Image Div */}
            <div className='hidden lg:flex justify-center items-center'>
                <Image className='w-[488px] h-[586px] rounded-full ' src={banner}></Image>
            </div>
        </div>
    </div>
    
    );
};

export default Banner;