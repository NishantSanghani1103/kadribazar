import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router'
import { counterContext } from '../pages/MainContext'

export default function Header() {

    let { cart } = useContext(counterContext)

    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="max-w-full shadow-lg sticky top-0 z-50">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 py-3">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/Style stroll_20250426_001342_0000.png" className='w-[50px] h-[50px]' alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">StyleStroll</span>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}  
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li onClick={()=>setIsOpen(false)}><Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link></li>
                        <li onClick={()=>setIsOpen(false)}><Link to="/product" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:text-blue-700 md:p-0 dark:text-white">Product</Link></li>
                        <li onClick={()=>setIsOpen(false)}><Link to="/cart" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:text-blue-700 md:p-0 dark:text-white">Cart ({cart.length})</Link></li>
                        <li onClick={()=>setIsOpen(false)}><Link to="/login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:text-blue-700 md:p-0 dark:text-white">Login</Link></li>
                        <li onClick={()=>setIsOpen(false)}><Link to="/register" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:text-blue-700 md:p-0 dark:text-white">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}
