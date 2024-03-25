import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Menu</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>About Us</a></li>
                            <li><a>Our Chief</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul  className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Menu</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About Us</a></li>
                        <li><a>Our Chief</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 justify-between items-center w-full">
                <div>
                    <p>Food Hut</p>
                </div>
                <div className='border'>
                    <ul className='flex justify-center items-center gap-2'>
                        <Link href="/">Home</Link>
                        <Link href="/">Menu</Link>
                        <Link href="/">Upcomming Foods</Link>
                        <Link href="/">About Us</Link>
                        <Link href="/">Our Chefs</Link>
                        <Link href="/">Contact</Link>
                    </ul>
                </div>

                <div>
                    <button className='btn btn-ghost'>Dashboard</button>
                </div>
                
            </div> */}
        </div>
    );
};

export default Navber;