import React from 'react'

function FoodItem({item, index}) {
    const price = item.price.split('').length;
    return (
        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='text-red-600 p-1 font-bold'>${price}</span>
                </p>
            </div>
        </div>
    )
}

export default FoodItem