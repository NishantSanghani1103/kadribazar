import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
export default function Home() {
    return (
        <>
            <section className='max-w-[1280px] mx-auto' id='banner'>
                <div className='w-[100%] mt-[50px] grid lg:grid-cols-[55%_auto] gap-y-4 md:grid-cols-[55%_auto] grid-flow-dense items-center justify-between' id='banner-mid'>
                    <div className=''>
                        <h1 className='lg:text-6xl md:text-4xl text-2xl  font-extrabold'>The experience makes all the difference. </h1>
                        <p className='lg:text-xl py-4 text-gray-400'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <div className='flex gap-3'>
                            <button className='bg-red-500 text-white py-3 px-5 rounded-sm flex items-center gap-2'>Get Started <IoArrowForward className='text-xl' /></button>
                            <button className='border-1 py-3 px-8 rounded-sm'>Offers</button>
                        </div>
                    </div>
                    <div>
                        <figure>
                            <img src="/images/phone-mockup.png" alt="" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='max-w-full mt-14 text-gray-950 ' id='category'>
                <h4 className='text-center lg:text-4xl sm:text-4xl text-2xl font-semibold'>Shop By Category</h4>
                <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2  gap-5 mt-5 justify-between' id='categoryItems'>
                    <div className='w-full   relative'>
                        <figure>
                            <img src="/images/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='max-w-full  lg:h-[1039px]
                            md:h-[540px] sm:h-[540px]  object-cover  ' alt="" />
                        </figure>

                        <div className='absolute bottom-1 left-[50%]  bg-white  categoryButton' style={{ transform: "translate(-50%,-50%)" }}>
                            <button className='py-2 px-10 font-bold'>Women</button>
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <figure>
                                <img src="/images/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" className='lg:h-[503px] sm:h-[250px] object-center' alt="" />
                            </figure>
                            <div className='absolute bottom-1 left-[50%]  bg-white  categoryButton' style={{ transform: "translate(-50%,-50%)" }}>
                                <button className='py-2 px-10 font-bold'>Shoes</button>
                            </div>
                        </div>
                        <div className='relative'>
                            <figure className='pt-8'>
                                <img src="/images/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" className='lg:h-[503px] sm:h-[250px] object-center' alt="" />
                            </figure>
                            <div className='absolute bottom-1 left-[50%]  bg-white  categoryButton' style={{ transform: "translate(-50%,-50%)" }}>
                                <button className='py-2 px-10 font-bold'>Watches</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full relative'>
                        <img src="/images/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1 (1).png" className=' sm:hidden hidden lg:block w-full lg:h-[1039px] sm:h-[350px] object-cover' alt="" />

                        <img src="/images/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" className='lg:hidden sm:hidden block' alt="" />
                        <div className='absolute bottom-1 left-[50%]  bg-white lg:block sm:hidden block  categoryButton' style={{ transform: "translate(-50%,-50%)" }}>
                            <button className='py-2 px-10 font-bold'>Accessories</button>
                        </div>
                    </div>

                </div>
                <div id='accesooryImageTab' className='relative'>
                    <img src="/images/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" className='lg:hidden hidden sm:block sm:w-[100%]' alt="" />
                    <div className='absolute bottom-1 left-[50%]  bg-white  categoryButton' style={{ transform: "translate(-50%,-50%)" }}>
                            <button className='py-2 px-10 font-bold'>Accessories</button>
                        </div>
                </div>
               
            </section>

            <section className=' max-w-[95%] mx-auto mt-14' id='differentProduct'>
                <div className='w-full shadow-gray-300 shadow-2xl py-8 '>
                    <h2 className='text-center lg:text-6xl sm:text-5xl text-2xl font-extrabold'>Get difference Product</h2>
                </div>
                <div className='max-w-full mt-7 grid lg:grid-cols-5 sm:grid-cols-3 gap-2'>
                    <div className=' shadow-2xl bg-white rounded-md relative differentProductItems'>
                        <img src="/images/thumbnail.png" className='mx-auto' alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail (3).png" className='mx-auto' alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Eyeshadow Palette with Mirror</p>
                            <span className='text-amber-700 font-bold'>Rs 19.99</span>
                            <p className='text-gray-500 text-xs py-2'>Glamour Beauty</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(3.28)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" className='mx-auto' alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white relative differentProductItems'>
                        <img src="/images/thumbnail.png" alt="" />
                        <div className='p-2 differentProductItemsContent'>
                            <p className='font-semibold'>Essence Mascara Lash Princess</p>
                            <span className='text-amber-700 font-bold'>Rs 9.99</span>
                            <p className='text-gray-500 text-xs py-2'>Essence</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <IoIosStar className='text-yellow-600' />
                                    <p className='text-xs pl-1'>(4.94)</p>
                                </div>
                                <div>
                                    <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-sm'> ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className=' absolute top-3 right-4 wishlistIcon'>
                            <FaHeart className='text-red-800 text-xl' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
