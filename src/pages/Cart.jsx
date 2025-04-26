import React, { useContext, useEffect, useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { counterContext } from './MainContext';
import { ToastContainer, toast } from 'react-toastify';
export default function Cart() {

  let { cart, setcart } = useContext(counterContext)
  return (
    <>
      <section className='max-w-full' id='cart'>
        <div className='w-full my-10'>
          <div className='grid lg:grid-cols-[75%_auto] gap-4'>
            <div className='w-[95%] mx-auto' id='shppingCart'>
              <div className=' flex justify-between cartHeading'>
                <h4 className='font-semibold lg:text-2xl'>Shopping Cart</h4>
                <p className='font-semibold lg:text-2xl'>{cart.length} Items</p>
              </div>
              <hr className="bg-[#ccc] h-px border-0 my-5" />
              <div >
                <table className="min-w-full table-fixed border-collapse text-gray-1000">
                  <thead>
                    <tr className="bg-white">
                      <th className="uppercase font-semibold text-[10px] sm:text-xs lg:text-xs w-[40%] text-left p-2" >
                        Product Details
                      </th>
                      <th className="uppercase font-semibold text-[10px] sm:text-xs lg:text-xs w-[18%] text-left p-2">
                        Quantity
                      </th>
                      <th className="uppercase font-semibold text-[10px] sm:text-xs lg:text-xs w-[18%] text-left p-2">
                        Price
                      </th>
                      <th className="uppercase font-semibold text-[10px] sm:text-xs lg:text-xs w-[18%] text-left p-2">
                        Total
                      </th>
                      <th className="uppercase font-semibold text-[10px] sm:text-xs lg:text-xs w-[20%] text-left p-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((value, index) => {
                        // console.log(value)
                        return (
                          <CartRow value={value} key={index} />
                        )
                      })
                    }

                  </tbody>
                </table>
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
                <p className=' font-semibold uppercase ' >Items {cart.length}</p>
                <p className=' font-semibold uppercase ' >Rs.0</p>
              </div>
              <form action="">
                <p className='py-5 px-2 uppercase font-semibold text-sm'>Shipping</p>
                <select name="" id="" className='w-[95%]  p-2'>
                  <option value="Standerd">Standerd Shipping-Rs.100</option>
                </select>
                <div className='mt-12 px-2' id='promocCode'>
                  <p className='uppercase font-semibold pb-2'>Promo Code</p>
                  <input type="text" className='w-full p-2 text-sm' placeholder='Enter Your Code' />
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

          <ToastContainer />
        </div>
      </section>
    </>
  )
}

function CartRow({ value }) {
  let { id, name, image, price, qty } = value

  let { cart, setcart } = useContext(counterContext)
  // console.log(cart)

  let [currentQty, setcurrentQty] = useState(qty)

  let RemoverCart = () => {
    if (confirm("Are You Sure For Remove Item From Cart ?")) {
      let finalCartAfterRemove = cart.filter((value) => value.id != id)
      setcart(finalCartAfterRemove)
      toast.success("Items Removed From Cart")
    }

  }



  useEffect(() => {

    let finalCart = cart.filter((value) => {

      if (value.id == id) {
        value['qty'] = currentQty
      }
      return value
    })

    // console.log(finalCart, id)
    setcart(finalCart)
    console.log(finalCart)
  }, [currentQty])

  return (
    <tr className='font-semibold'>
      <td className='p-2'>
        <div className='lg:flex sm:flex items-center gap-4 '>
          <img src={image } className='h-16 w-16 rounded-lg object-cover' alt="" />
          {name}
        </div>
      </td>
      <td className='p-2'>
        <input type="number" value={currentQty} className='border-1 w-20 text-center' min={1} max={10} onChange={(e) => setcurrentQty(e.target.value)} />
      </td>
      <td className='p-2'>
        Rs. {price}
      </td>
      <td className='p-2'>
        Rs. {qty * price}
      </td>
      <td className='p-2'>
        <button onClick={RemoverCart} className='text-red-500 cursor-pointer'>Remove</button>
      </td>
    </tr>
  )
}


