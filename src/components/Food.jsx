import React, { useState } from 'react'
import {data} from '../data/data.js'
import FoodItem from './FoodItem.jsx';
function Food({searched}) {
    const [food, setFood] = useState(data);

    const filterType = (category) => {
        setFood(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-red-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Type of Foods</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFood(data)} className='m-1 border-none bg-red-600 text-white hover:bg-yellow-500'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-none bg-red-600 text-white hover:bg-yellow-500'>Burger</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-none bg-red-600 text-white hover:bg-yellow-500'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-none bg-red-600 text-white hover:bg-yellow-500'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-none bg-red-600 text-white hover:bg-yellow-500'>Chicken</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700' >Price of Foods</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} className='m-1 border-none bg-yellow-500 text-white  hover:bg-red-600'>$1</button>
                    <button onClick={() => filterPrice('$$')} className='m-1 border-none bg-yellow-500 text-white hover:bg-red-600'>$2</button>
                    <button onClick={() => filterPrice('$$$')} className='m-1 border-none bg-yellow-500 text-white hover:bg-red-600'>$3</button>
                    <button onClick={() => filterPrice('$$$$')} className='m-1 border-none bg-yellow-500 text-white hover:bg-red-600'>$4</button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {searched.length > 0 ? 
            food.filter((item) => item.name.toLowerCase().includes(searched.toLowerCase())).map((item, index) => {
                return (
                    <FoodItem item={item} index={index}/>
                )
            })
            :
            food.map((item, index) => {
                return (
                    <FoodItem item={item} index={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default Food