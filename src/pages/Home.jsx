import React, { useContext, useEffect, useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { counterContext } from './MainContext';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
export default function Home() {



    let [homeItems, sethomeItems] = useState([])

    let getHomeProduct = () => {
        axios.get("https://wscubetech.co/ecommerce-api/products.php", {
            params: {
                page: 4,
                limit: 30
            }
        })
            .then((res) => res.data)
            .then((finalres) => {
                console.log(finalres.data)
                sethomeItems(finalres.data)
            })
    }


    useEffect(() => {
        getHomeProduct()
    }, [])

    // let {count,setcount}=useContext(counterContext)
    return (
        <>
            {/* <button className='border-1' onClick={()=>setcount(count+1)}>Count</button> */}
            <section className='max-w-[1280px] mx-auto' id='banner'>
                <div className='w-[100%] mt-[50px] grid lg:grid-cols-[55%_auto] gap-y-4 md:grid-cols-[55%_auto] grid-flow-dense items-center justify-between' id='banner-mid'>
                    <div className='lg:order-1 sm:order-1 order-2 sm:mx-2 mx-2 lg:mx-0'>
                        <h1 className='lg:text-6xl md:text-4xl text-2xl  font-extrabold'>The experience makes all the difference. </h1>
                        <p className='lg:text-xl py-4 text-gray-400'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <div className='flex gap-3'>
                            <button className='bg-red-500 text-white py-3 px-5 rounded-sm flex items-center gap-2'>Get Started <IoArrowForward className='text-xl' /></button>
                            <button className='border-1 py-3 px-8 rounded-sm'>Offers</button>
                        </div>
                    </div>
                    <div className='lg:order-2 sm:order-2 order-1'>
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
                <div id='accesooryImageTab' className='relative lg:hidden sm:block block'>
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


                    {

                        homeItems.length >= 1 ?

                            homeItems.map((items, index) => {
                                return (
                                    <CategoryItems hData={items} key={index} />
                                )
                            })
                            :
                            <p>Loaing....</p>
                    }





                </div>

                <ToastContainer />
            </section>

        </>

    )
}

function CategoryItems({ hData }) {

    let { id, name, description, rating, price, image, category } = hData

    let { cart, setcart } = useContext(counterContext)



    let homeItmesObj = {
        id,
        name,
        rating,
        price,
        image,
        category,
        qty: 1
    }

    let AddToCart = () => {
        setcart([...cart, homeItmesObj])
        toast.success("Item Added In Cart")
    }

    let checkCartItems = cart.filter((items) => items.id == id)
    // console.log(checkCartItems, id)


    let removeFromCart = () => {
        if ((confirm("Are You Want To Sure For Remove Items ?"))) {
            let finalCartAfterRemove = cart.filter((items) => items.id != id)
            console.log(finalCartAfterRemove)
            setcart(finalCartAfterRemove)
            toast.success("Item Removed From Cart")
        }

    }

    return (
        <div className=' shadow-2xl bg-white relative differentProductItems'>
            <img src={image} alt="" className='mx-auto' />
            <div className='p-2 differentProductItemsContent'>
                <p className='font-semibold'>{name}</p>
                <span className='text-amber-700 font-bold'>Rs {price}</span>
                <p className='text-gray-500 text-xs py-2'>{category}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <IoIosStar className='text-yellow-600' />
                        <IoIosStar className='text-yellow-600' />
                        <IoIosStar className='text-yellow-600' />
                        <IoIosStar className='text-yellow-600' />
                        <IoIosStar className='text-yellow-600' />
                        <p className='text-xs pl-1'>({rating})</p>
                    </div>
                    <div>
                        {checkCartItems.length == 1
                            ?
                            <button className='bg-red-600 text-white py-1 px-3 rounded-md text-sm cursor-pointer font-semibold' onClick={removeFromCart} > Remove</button>
                            :
                            <button className='bg-blue-600 font-semibold text-white py-1 px-3 rounded-md text-sm cursor-pointer' onClick={AddToCart}> ADD</button>
                        }
                    </div>
                </div>
            </div>
            <div className=' absolute top-3 right-4 wishlistIcon'>
                <FaHeart className='text-red-800 text-xl' />
            </div>
        </div>
    )
}
