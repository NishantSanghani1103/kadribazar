import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
export default function Cart() {
  return (
    <>
      <section className='max-w-full' id='cart'>
        <div className='w-full my-10'>
          <div className='grid lg:grid-cols-[75%_auto] gap-4'>
            <div className='w-[95%] mx-auto' id='shppingCart'>
              <div className=' flex justify-between cartHeading'>
                <h4 className='font-semibold lg:text-2xl'>Shopping Cart</h4>
                <p className='font-semibold lg:text-2xl'>0 Items</p>
              </div>
              <hr className="bg-[#ccc] h-px border-0 my-5" />
              <div className=' flex items-center justify-between lg:gap-0 gap-2 productDetails'>
                <p className='text-gray-1000 lg:basis-[40%]  basis-[40%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold'  >Product Details</p>
                <p className='text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold' >Quantity</p>
                <p className='text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold' >Price</p>
                <p className='text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold' >total</p>
              </div>
              <div className='my-8 flex  gap-1 items-center'>
                <IoArrowBackOutline className='text-xl text-indigo-600 font-bold' />
                <p className='text-indigo-600 font-bold text-sm'>Continue Shopping</p>
              </div>
            </div>
            <div className='w-[95%] mx-auto' id='orderSummary' >
              <h4 className='font-semibold lg:text-2xl'>Order Summary</h4>
              <hr className="bg-[#ccc] h-px border-0 my-5" />
              <div className=' flex w-[95%] mx-auto items-center justify-between'>
                <p className=' font-semibold uppercase ' >Items 0</p>
                <p className=' font-semibold uppercase ' >Rs.0</p>
              </div>
              <form action="">
                <p className='py-5 px-2 uppercase font-semibold text-sm'>Shipping</p>
                <select name="" id="" className='w-[95%]  p-2'>
                  <option value="Standerd">Standerd Shipping-Rs.100</option>
                </select>
                <div className='mt-12 px-2' id='promocCode'>
                  <p className='uppercase font-semibold pb-2'>Promo Code</p>
                  <input type="text" className='w-full p-2 text-sm' placeholder='Enter Your Code'/>
                  <button className='text-white bg-red-500 py-2 px-5 my-8 cursor-pointer text-sm'>Apply</button>
                  <hr className="bg-[#ccc] h-px border-0" />
                  <div className='flex w-[95%] mx-auto justify-between my-5'>
                    <p className='uppercase font-semibold text-sm'>Total cost</p>
                    <p className='uppercase font-semibold text-sm'>rs.0</p>
                  </div>
                  <button className='text-white w-[95%] block mx-auto uppercase bg-indigo-500 p-2'>checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
