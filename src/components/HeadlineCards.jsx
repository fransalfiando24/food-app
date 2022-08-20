import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-yellow-500 bg-yellow-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/2532006/pexels-photo-2532006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Card */}
        <div className='rounded relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-yellow-500 bg-yellow-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Card */}
        <div className='rounded relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-yellow-500 bg-yellow-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards