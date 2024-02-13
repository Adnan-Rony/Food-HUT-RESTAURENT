"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FcRating } from "react-icons/fc";
import Image from 'next/image';
import Link from 'next/link';



export async function getdata() {

    let data = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    })

    data = await data.json();

    if (data.success) {
        return data.result;
    }
    else {
        return { success: false }
    }
}



const Categories = async () => {

    const post = await getdata();

    const breakfastFood = post.filter(item => item.category === 'breakfast')
    const lunchFood = post.filter(item => item.category === 'lunch')
    const dinnerFood = post.filter(item => item.category === 'dinner')








    return (
        <div className='py-10'>
            <div className='space-y-2 text-center'>
                <p className='lg:text-4xl text-3xl font-bold '><span className='text-[#F54748]'>Menu</span>  That <span className='text-[#FDC55E]'>Always </span>Make You </p>
                <p className='lg:text-4xl text-3xl font-bold '>Fall In <span className='text-[#F54748]'>Love </span><span >Delivery</span></p>
            </div>

            <div className='py-5'>
                <div>
                    <Tabs>
                        <TabList className="grid lg:w-[500px] mx-auto gap-3 space-y-3 lg:space-y-0 lg:gap-10 justify-center items-center lg:grid-cols-4 grid-cols-2  ">

                            <Tab className="btn btn-outline w-24 rounded-3xl hover:bg-[#F54748] hover:border-none">Breakfast</Tab>

                            <Tab className="btn btn-outline w-24 rounded-3xl hover:bg-[#F54748] hover:border-none">Lunch</Tab>

                            <Tab className="btn btn-outline w-24 rounded-3xl hover:bg-[#F54748] hover:border-none">Dinner</Tab>

                            <Tab className="btn btn-outline w-24 rounded-3xl hover:bg-[#F54748] hover:border-none">Dessers</Tab>

                        </TabList>

                        <TabPanel>





                            <div className='py-10 grid lg:grid-cols-4 justify-center items-center gap-4'>


                                {
                                    breakfastFood.map((item) => (
                                        <div key={item._id} className='cardbg rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                                            <Image width={200} height={200} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={item.image}></Image>




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


                                                <p className='text-2xl font-bold text-[#F54748]'>{item.title} </p><span className='text-xl font-bold'>{item.price}$</span>


                                            </div>
                                            <Link href={`/categories/${item._id}`}>
                                                <button className='btn flex  mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white'>
                                                    Order Now
                                                </button>
                                            </Link>

                                        </div>
                                    ))
                                }







                            </div>













                        </TabPanel>
                        <TabPanel>
                            <div className='py-10 grid lg:grid-cols-4 justify-center items-center gap-4'>


                                {
                                    dinnerFood.map((item) => (
                                        <div key={item._id} className='cardbg rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                                            <Image width={200} height={200} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={item.image}></Image>




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


                                                <p className='text-2xl font-bold text-[#F54748]'>{item.title} </p><span className='text-xl font-bold'>{item.price}$</span>


                                            </div>
                                            <Link href={`/categories/${item._id}`}>
                                                <button className='btn flex  mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white'>
                                                    Order Now
                                                </button>
                                            </Link>

                                        </div>
                                    ))
                                }







                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='py-10 grid lg:grid-cols-4 justify-center items-center gap-4'>


                                {
                                    lunchFood.map((item) => (
                                        <div key={item._id} className='cardbg rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                                            <Image width={200} height={200} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={item.image}></Image>




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


                                                <p className='text-2xl font-bold text-[#F54748]'>{item.title} </p><span className='text-xl font-bold'>{item.price}$</span>


                                            </div>
                                            <Link href={`/categories/${item._id}`}>
                                            <button className='btn flex  mx-auto btn-sm bg-[#F54748] hover:bg-[#FDC55E] border-none text-white'>
                                                Order Now
                                            </button>
                                            </Link>

                                        </div>
                                    ))
                                }







                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Categories;