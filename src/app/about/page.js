import React from 'react';
import img from '../../../public/8e75724101f6d754e13f12101adf87f2.png'
import { FcAssistant } from "react-icons/fc";
import Image from 'next/image';
const About = () => {
    return (
        <div className='py-5'>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                <div >
                    <Image  src={img}></Image>
                </div>

                <div className='p-5'>
                    <div className='lg:space-y-3 space-y-2'>
                        <p className='lg:text-4xl text-3xl font-bold '>We're <span className='text-[#F54748]'>more</span>  than </p>
                        <p className='lg:text-4xl text-3xl font-bold '><span className='text-[#FDC55E]'>multiple</span><span >Delivery</span></p>
                        <p>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 py-5'>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> Online Order </p>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> 24/7 Service </p>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> Pre-Reservation </p>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> Oragonized Foodhut Place </p>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> Super Chef</p>
                        <p className='flex items-center gap-1'> <span><FcAssistant className='text-2xl' /></span> Clean Kitchen </p>
                      
                      

                    </div>
                    <div className='flex items-center gap-3'>
                    <button className='btn btn-sm rounded-2xl bg-[#F54748] border-none text-white text-sm hover:bg-[#FDC55E]'>About Us</button>
                </div>
                </div>

            </div>

        </div>
    );
};

export default About;