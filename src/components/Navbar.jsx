import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'

function Navbar({searchHandle}) {
    const [nav, setNav] = useState(false);

    return (
        <div className="fixed w-[100%] mx-auto flex justify-between items-center p-4 z-10 bg-white">
            {/* Left Side */}
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Excellent <span className='font-bold text-red-600'>Kitchen</span>
                </h1>
            </div>

            <div className='flex gap-3'>
                {/* Search Input */}
                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px]'>
                    <AiOutlineSearch size={20}/>
                    <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' onChange={(e) => searchHandle(e.target.value)}/>
                </div>

                {/* Card Button */}
                <button className='bg-yellow-500 border-none text-white hidden md:flex items-center py-2 rounded-full justify-center'>
                    <BsFillCartFill size={20}/>
                </button>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> :  ''}
            
            {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)}/>
                <h2 className='text-2xl p-4'>
                    Excellent <span className='font-bold text-red-600'>Kitchen</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4 text-red-600'/>Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4 text-red-600'/>Favorites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4 text-red-600'/>Wallet</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4 text-red-600'/>Promotions</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4 text-red-600'/>Help</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
