import React from 'react';
import './style.css'
import Image from 'next/image';
import img from '../../../public/hero.svg'
import { FcRating } from "react-icons/fc";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

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

    const slicefood = foods.slice(0, 4)

    const truncateDescription = (description) => {
        const words = description.split(' ');
        const truncatedWords = words.slice(0, 8);
        return truncatedWords.join(' ');
    };


    return (
        <div className="py-10">
            <div className='text-center space-y-3'>
                <p className='lg:text-5xl font-bold text-3xl'>Today <span className='text-[#F54748]'>special</span>  offers</p>

                <p className='lg:w-[856px] mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            </div>

            <div className='py-10 grid lg:grid-cols-4 justify-center items-center gap-4'>


                {
                    slicefood.map((item) => (
                        <div key={item._id} className='cardbg rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                            <Image width={200} height={200} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={item.picture}></Image>

                            


                            <div className='flex justify-center items-center gap-2'>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-10">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-10">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-10">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-10 bg-neutral text-neutral-content">
                                            <span>+9</span>
                                        </div>
                                    </div>
                                </div>
                                <FcRating className='text-2xl' />
                                <div>
                                    <p className='text-xl font-semibold'>({item.rating})</p>
                                </div>
                            </div>


                            <div className="text-center  space-y-2">


                                <p className='text-2xl font-bold text-[#F54748]'>{item.name} </p><span className='text-xl font-bold'>{item.price}$</span>
                                <p className='w-[245px] mx-auto'>{truncateDescription(item.description)}...</p>

                            </div>
                            <button className='btn flex  mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white'>
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