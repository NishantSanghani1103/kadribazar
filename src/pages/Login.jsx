import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Login() {

  let [username, setusername] = useState("")
  let [password, setpassword] = useState("");


  let formHandle = (event) => {
    event.preventDefault()
    console.log(username, password)
    setusername('')
    setpassword('')
  }
  return (
    <>
      <section className='max-w-[770px] mx-auto shadow-lg bg-white border-0 rounded-xl'>
        <div className='w-full mt-10 grid lg:grid-cols-[40%_auto] sm:grid-cols-[40%_auto] grid-cols-1 gap-5'>
          <div className='bg-blue-500 lg:mx-0 sm:mx-0 mx-2'>
            <div className='my-10 text-white text-center'>
              <h2 className=' text-3xl uppercase  font-bold'>K-WD</h2>
              <p className='py-10 text-md text-gray-300 leading-[25px] font-semibold'>With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
              <p className='pt-5 font-semibold'>Don't have an account?</p>
              <Link className='underline'>Get Started!</Link>
              <p className='py-10 text-sm text-gray-300 font-semibold'>Read our <Link className='underline'>terms</Link> and <Link className='underline'>conditions</Link></p>
            </div>
          </div>
          <div className=' p-6 accountLogin lg:mx-0 sm:mx-0 mx-2'>
            <h3 className='text-3xl text-gray-700 font-semibold'>Account Login</h3>
            <form action="" onSubmit={formHandle} className='my-5'>
              <label htmlFor="" className='font-sm py-2 font-semibold text-gray-500'>Email address</label>
              <input type="email" value={username} onChange={(event) => setusername(event.target.value)} className='w-full p-2 my-2 h-[40px] border-1 border-gray-400 rounded-sm' />

              <label htmlFor="" className='font-sm py-2 font-semibold text-gray-500 flex justify-between'>Password
                <span className='text-sm text-blue-600 font-normal'>Forgot Password?</span>
              </label>
              <input type="password" value={password} onChange={(event) => setpassword(event.target.value)} className='w-full p-2 mb-4 h-[40px] border-1 border-gray-400 rounded-sm' />

              <div className='flex items-center gap-2'>
                <input type="checkbox" className='w-4 h-4' />

                <label htmlFor="" className='font-semibold text-gray-500'>Remember me</label>
              </div>

              <button className='w-full bg-blue-500 text-white p-2 my-4 font-semibold text-xl border-0 rounded-sm cursor-pointer'>Log in</button>

              <p className='text-center text-gray-400 font-semibold'>Or login with</p>

              <button className='w-full border-1 my-4 p-1.5 rounded-sm flex items-center justify-center gap-1 text-gray-800 font-medium hover:cursor-pointer hover:'><FaGoogle /> Login with Google</button>


              <button className='w-full border-1 my-4 p-1.5 rounded-sm flex items-center justify-center gap-1 text-blue-500 font-medium hover:cursor-pointer hover:'><FaFacebook />Login with facebook</button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}
