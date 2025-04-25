import React, { useState } from 'react'

export default function Register() {

  let [username, setusername] = useState("")

  let [password, setpassword] = useState("")


  let formHandle = (event) => {
    event.preventDefault()
    console.log(username, password)
    setusername("")
    setpassword("")
  }
  return (
    <>
      <section className='max-w-[760px] mx-auto my-8 bg-white' >

        <div className='p-4 w-full' style={{ border: "1px solid #ccc" }}>
          <h3 className='font-bold lg:text-2xl sm:text-2xl text-xl pb-3 border-b-1 border-gray-400 '>Register for a free account</h3>
          <form action="" onSubmit={formHandle} className='my-2'>
            <label htmlFor="" className='font-semibold text-sm'>Email Address</label>
            <input type="email" value={username} onChange={(event) => setusername(event.target.value)} placeholder='Your Email Address' className='w-full  py-3 border-1 border-gray-300 rounded-sm p-2 my-2' />
            <label htmlFor="" className='font-semibold text-sm'>Password</label>
            <input type="password" value={password} onChange={(event) => setpassword(event.target.value)} placeholder='Your Secure Password' className='w-full  py-3 border-1 border-gray-300 rounded-sm p-2 my-2' />
            <p className='text-xs'>At least 6 characters</p>

            <button className='my-11 px-3 py-2 rounded-2xl font-bold cursor-pointer bg-blue-600 text-white'>Sign Up</button>
          </form>
        </div>
        <p className='text-center py-7 text-sm'>I already have an account</p>
        <p className='text-center text-sm'>This is a product of <span className='font-bold'>Your Company</span> </p>
      </section>
    </>
  )
}
