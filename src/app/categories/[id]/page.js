import '../../style.css'
import Image from "next/image";
import { FcRating } from "react-icons/fc";
import './style.css'
// export async function generateStaticParams() {


//     const res = await fetch("http://localhost:3001/api/categories")
//     const post = await res.json();



//     const ids = post.map(post => {
//         return {
//             id: post.id + ""
//         }
//     })
//     // console.log(ids);
//     return ids
// }
// export  async function getdata(id){
//     let data=await fetch(`http://localhost:3001/api/categories/${id}`)


//     return data.result
// }

const CategoriesDetails = async (props) => {

    let res = await fetch(`http://localhost:3000/api/categories/${props.params.id}`);

    res = await res.json();
    // console.log(res)

    // console.log(params)

    return (
        <div className="py-10"> 
            <div  className='cardbg extracolour rounded-2xl  w-80 h-[500px]  lg:px-5 px-6 space-y-2'>

                <Image width={200} height={200} alt='not showing' className='lg:w-[250px] lg:h-[250px] justify-center flex items-center rounded-full' src={res.result.image}></Image>




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
                        <p className='text-xl font-semibold'>({res.result.rating})</p>
                    </div>
                </div>


                <div className="text-center  space-y-2">


                    <p className='text-2xl font-bold text-[#F54748]'>{res.result.title} </p><span className='text-xl font-bold'>{res.result.price}$</span>


                </div>
             

            </div>


        </div>
    );
};

export default CategoriesDetails;