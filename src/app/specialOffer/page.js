import React from 'react';
import './style.css'
import Image from 'next/image';
import img from '../../../public/hero.svg'


const getData = async () => {
    let post = await fetch('http://localhost:3000/api/foods', {
        cache: 'no-store'
    })
    post = await post.json();

    if (post.success) {
        return post.result;
    }
    else {
        return { success: false }
    }
}



const SpecialOffer = async () => {


    const foods = await getData();



    return (
        <div className="py-10">
            <div className='text-center space-y-3'>
                <p className='lg:text-5xl font-bold text-3xl'>Today <span className='text-[#F54748]'>special</span>  offers</p>

                <p className='lg:w-[856px] mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            </div>

            <div className='py-5 grid lg:grid-cols-4 justify-center items-center gap-4'>


                {
                        foods.map((item)=>(
                            <div key={item._id} className='cardbg rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                            <Image width={250} height={250} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={item.picture}></Image>
        
                            <div className="text-center space-y-2">
                                <p className='text-2xl font-bold text-[#F54748]'>{item.name}</p>
                                <p className='w-[245px] mx-auto'>{item.description}</p>
        
                            </div>
                            <button className='btn flex mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white'>
                                Order Now
                            </button>
        
                        </div>
                        ))
                }
               






            </div>

        </div>
    );
};

export default SpecialOffer;