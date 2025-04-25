import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router';
import { IoMdArrowDropdown } from "react-icons/io";
import { ShortBy } from '../Data/ShortBy';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { counterContext } from './MainContext';
import { ToastContainer, toast } from 'react-toastify';

export default function Product() {

  let [productData, setproductData] = useState([])

  let [categoryData, setcategoryData] = useState([])

  let [brandData, setbrandData] = useState([])

  let [sorrtBy, setsortBy] = useState(false)

  let [sorting, setsorting] = useState(null)

  let [isLoading, setisLoading] = useState(false)

  let [categotyFilter, setcategotyFilter] = useState([])

  let [brandFilter, setbrandFilter] = useState([])

  let [ratingFilter, setratingFilter] = useState(null)

  let [discountPriceFilter, setdiscountPriceFilter] = useState(null)

  let [dropDownMenu, setdropDownMenu] = useState("Sort By : Recommended")

  let [mobileFilterButton, setmobileFilterButton] = useState(false)

  let [priceFilter, setpriceFilter] = useState([null, null])

  let [totalPages, settotalPages] = useState(null)

  let [currentPage, setcurrentPage] = useState(null)

  let [mobileSortBy,setmobileSortBy]=useState(false)




  let getBrand = () => {
    axios.get("https://wscubetech.co/ecommerce-api/brands.php")
      .then((res) => res.data)
      .then((finalres) => {
        setbrandData(finalres.data);
        // console.log(finalres);
      })
  }
  let getCategory = () => {
    axios.get("https://wscubetech.co/ecommerce-api/categories.php")
      .then((res) => res.data)
      .then((finalres) => {
        setcategoryData(finalres.data)
        // console.log(finalres.data)
      })
  }


  let getProducts = () => {

    // console.log(categotyFilter)

    // console.log(brandFilter)
    setisLoading(true)
    axios.get("https://wscubetech.co/ecommerce-api/products.php", {
      params: {
        page: currentPage,
        limit: 12,
        categories: categotyFilter.join(","),
        brands: brandFilter.join(","),
        price_from: priceFilter[0],
        price_to: priceFilter[1],
        discount_from: 0,
        discount_to: discountPriceFilter,
        rating: ratingFilter,
        sorting: sorting
      }
    })
      .then((res) => res.data)
      .then((finalres) => {
        // console.log(finalres)
        setproductData(finalres.data)
        settotalPages(finalres.total_pages)
        // console.log(totalPages)
        setcurrentPage(finalres.current_page)
        setisLoading(false)
      })
  }

  let getCategoryCheck = (event) => {

    if (event.target.checked) {
      if (!categotyFilter.includes(event.target.value)) {
        setcategotyFilter([...categotyFilter, event.target.value])
      }
    }
    else {
      let finalData = categotyFilter.filter((v) => v != event.target.value)
      setcategotyFilter(finalData)
      // console.log(event.target.value)
    }
    // console.log(event.target.value)
  }

  let getBrandFilter = (event) => {

    if (event.target.checked) {
      if (!brandFilter.includes(event.target.value)) {
        setbrandFilter([...brandFilter, event.target.value])
      }
    }
    else {
      let finalData = brandFilter.filter((v) => v != event.target.value)
      setbrandFilter(finalData)
    }

    // console.log(event.target.value)
  }

  useEffect(() => {

    getCategory()
    getBrand()
  }, [])


  useEffect(() => {
    getProducts()
  }, [sorting, categotyFilter, brandFilter, ratingFilter, discountPriceFilter, priceFilter, totalPages, currentPage])

  return (
    <>
      <div className='w-full bottom-0 z-10 border-1 bg-white fixed  lg:hidden sm:hidden ' id='mobile-filter-buttons'>
        <div className='w-full grid grid-cols-2 p-3'>
          <button className='border-r' onClick={()=>setmobileSortBy(!mobileSortBy)}>{dropDownMenu}</button>
          <button onClick={() => setmobileFilterButton(!mobileFilterButton)}>Filters</button>
        </div>
      </div>

      <div className={`lg:hidden sm:hidden  w-[250px] bg-white border-1 rounded-sm -translate-x-1/2 left-[50%] -translate-y-1/2 shadow-lg fixed top-1/2    ${mobileSortBy ? 'block' : 'hidden'} `}>

        <nav>
          <ul>

            {ShortBy.map((value, index) => {

              let { id, title } = value
              return (
                <li className='p-2 border-b border-gray-400'
                onClick={()=>{
                  setmobileSortBy(false)
                  setsorting(id)
                  setdropDownMenu(title)
                }}
                >{title}</li>
              )


            })}


          </ul>
        </nav>
      </div>

      <section className='max-w-full bg-white'>

        <div className=' my-10 grid lg:grid-cols-[15%_auto] sm:grid-cols-[30%_auto] gap-5'>

          <div className={`max-w-full cursor-pointer lg:block sm:block bg-white lg:static sm:static  absolute top-[20%] ${mobileFilterButton ? '' : 'hidden'} `} id='Fliter'>
            <div className='w-full mb-3 flex justify-around' id='heading'>
              <h3 className='uppercase text-black font-semibold text-sm'>FILTERS</h3>
              <h1 className='uppercase text-sm text-red-500 font-semibold'>Clear all</h1>
            </div>
            <div className='p-4 overflow-y-scroll h-[250px] scrollbar-none' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>categories</h4>
              <div className='my-2'>
                <ul>

                  {categoryData.map((value, index) => {
                    return (
                      <li className='py-2'>
                        <input type="checkbox" value={value.slug} onChange={getCategoryCheck} /> {value.name}
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>
            <div className='p-4 overflow-y-scroll h-[250px] ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>BRAND</h4>
              <div className='my-2'>
                <ul>
                  {brandData.map((value, index) => {
                    return (
                      <li className='py-2'>
                        <input type="checkbox" value={value.slug} onChange={getBrandFilter} /> {value.name}
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>PRICE</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => setpriceFilter([10, 250])} />&nbsp;Rs. 10 to Rs. 250
                  </li>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => setpriceFilter([250, 500])} />&nbsp;Rs. 250 to Rs. 500
                  </li>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => setpriceFilter([500, 1000])} />&nbsp;Rs. 500 to Rs. 1000
                  </li>
                  <li className=''>
                    <input type="radio" name='priceFilter' onClick={() => setpriceFilter([1000, 50000])} />&nbsp;Rs. 1000 to Above
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>DISCOUNT RANGE</h4>
              <div className='my-2'>
                <ul>

                  <li className='pb-3' onClick={() => {
                    setdiscountPriceFilter(5)

                  }}>

                    <input type="radio" name='discount' />&nbsp;5% and above
                  </li>
                  <li className='pb-3' onClick={() => {
                    setdiscountPriceFilter(10)
                  }}>
                    <input type="radio" name='discount' />&nbsp;10% and above
                  </li>
                  <li className='pb-3' onClick={() => {
                    setdiscountPriceFilter(15)
                  }}>
                    <input type="radio" name='discount' />&nbsp;15% and above
                  </li>
                  <li className='' onClick={() => {
                    setdiscountPriceFilter(20)
                  }}>
                    <input type="radio" name='discount' />&nbsp;20% and above
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>Rating</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3' onClick={() => {
                    setratingFilter(4)
                  }}>
                    <input type="radio" onClick={() => {

                    }} />&nbsp;4★ & above
                  </li>
                  <li className='pb-3' onClick={() => {
                    setratingFilter(3)
                  }}>
                    <input type="radio" />&nbsp;3★ & above
                  </li>
                  <li className='pb-3' onClick={() => {
                    setratingFilter(2)
                  }}>
                    <input type="radio" />&nbsp;2★ & above
                  </li>
                  <li className='' onClick={() => {
                    setratingFilter(1)
                  }}>
                    <input type="radio" />&nbsp;1★ & above
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full' id='product'>

            <div className='mb-3 flex justify-end relative' id='filterButton'>
              <ToastContainer />
              <div className='relative lg:block sm:block hidden'>
                <button className='border-2 px-2 py-1 cursor-pointer flex items-center font-semibold' onClick={() => setsortBy(!sorrtBy)}>
                  {dropDownMenu}

                  <IoMdArrowDropdown className='text-xl' />

                </button>

                <div className={`shadow-lg left-0 w-full bg-white p-3 border-1 border-gray-400 rounded-sm absolute top-[100%] ${sorrtBy ? 'block' : 'hidden'}`}>
                  <ul>
                    {
                      ShortBy.map((value, index) => {
                        let { id, title } = value
                        return (
                          <li className='py-1 p-2 cursor-pointer hover:bg-gray-100' onClick={() => {
                            setsorting(id)
                            // console.log(sorting)
                            setsortBy(false)
                            setdropDownMenu(title)
                          }}>
                            {title}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div>

                </div>
              </div>
            </div>
            <div className=' grid lg:grid-cols-4 sm:grid-cols-2 gap-2' id='product-mid'>
              {
                isLoading ?
                  <h1>Loading...</h1>
                  :
                  productData.map((value, index) => <ProductItems pData={value} key={index} />)
              }
            </div>
            <div className='my-10'>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setcurrentPage}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

function ProductItems({ pData }) {
  let { id, name, price, rating, image, description, discount_percentage } = pData

  let { cart, setcart } = useContext(counterContext)

  let addToCart = () => {
    let cartObj = {
      id,
      name,
      price,
      image,
      qty: 1
    }

    setcart([...cart, cartObj])
    toast.success("Items Added In Cart !")
    // let finalCartItems=cart.filter((value)=>value.id!=id)
    // setcart(finalCartItems)
  }
  // console.log(cart,id)

  let checkmyCartItems = cart.filter((value) => value.id == id)
  // console.log(checkmyCartItems,id)

  let removeCart = () => {

    if (confirm("Are You Sure For Remove Items From Cart ? ")) {
      let fianlCartItems = cart.filter((value) => value.id != id)
      setcart(fianlCartItems)
      toast.success("Items Removed From Cart !")
    }

  }

  return (

    <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
      <Link to={`/product-details/${id}`}>
        <figure>
          <img src={image} className='w-[295px] h-[180px] mx-auto' alt="" />
        </figure>
      </Link>
      <div className='p-2  productItemsContent overflow-hidden'>
        <h3 className='font-semibold  text-2xl line-clamp-1'>
          {name}
        </h3>

        <p className='text-gray-800 py-2 line-clamp-2 leading-[27px]'>{description}</p>
        <div className='py-4 flex gap-1  justify-between items-center  price'>
          <div className='flex items-center gap-2'>
            <p className='font-semibold'>Rs.{price}</p>
            <span className='text-gray-500 text-xs'>Rs.{price}</span>
            <p className='text-[10px] text-red-500'>({discount_percentage})</p>
          </div>
          <div>
            {/* <span>{rating}</span> */}

            {
              checkmyCartItems.length == 1
                ?
                <button className='bg-red-600 text-white rounded-sm  px-2 py-1 font-semibold text-sm cursor-pointer uppercase' onClick={removeCart}>Remove</button>
                :
                <button className='bg-blue-600 text-white rounded-sm  px-2 py-1 font-semibold text-sm cursor-pointer uppercase' onClick={addToCart}>Add</button>
            }

          </div>
        </div>

      </div>

    </div>

  )
}
