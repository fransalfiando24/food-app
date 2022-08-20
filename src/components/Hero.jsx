import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 pt-20'>
        <div className='mx-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>#1 <span className='text-red-600'>in The Worlds</span></h1>
                <h1 className='px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500'>The <span className='text-red-600'>Best</span></h1>
                <h1 className='px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>Food <span className='text-red-600'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/8305725/pexels-photo-8305725.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Hero