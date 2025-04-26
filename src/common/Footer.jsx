import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <>


            <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <Link    to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/images/Style stroll_20250426_001342_0000.png" className='w-[50px] h-[50px]' alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">StyleStroll</span>
                        </Link>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to={'/product'} class="hover:underline me-4 md:me-6">Product</Link>
                            </li>
                            <li>
                                <Link to={'/cart'} class="hover:underline me-4 md:me-6">Cart</Link>
                            </li>
                            <li>
                                <Link to={'/login'} class="hover:underline me-4 md:me-6">Login</Link>
                            </li>
                            <li>
                                <Link to={'/register'} class="hover:underline">Register</Link>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://kadribazar.vercel.app/" class="hover:underline">StyleStroll</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}
