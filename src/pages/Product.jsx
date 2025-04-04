import React from 'react'

export default function Product() {
  return (
    <>
      <section className='max-w-full bg-white'>
        <div className=' my-10 grid lg:grid-cols-[15%_auto] sm:grid-cols-[30%_auto] gap-5'>
          <div className='max-w-full' id='Fliter'>
            <div className='p-4 overflow-y-scroll h-[250px] scrollbar-none' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>categories</h4>
              <div className='my-2'>
                <ul>
                  <li className='py-2'>
                    <input type="checkbox" /> Beauty
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Fragrances
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Furniture
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Groceries
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Home Decoration
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Kitchen Accessories
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Laptops
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Laptops
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Mens Shirts
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Mens Shoes
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Mens Watches
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Mobile Accessories
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Motorcycle
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Skin Care
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Beauty
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Sports Accessories
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Sunglasses
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Tablets
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Tops
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Vehicle
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Womens Bags
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Womens Dressess
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Womens Jewellery
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Womens Shoes
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Womens Watches
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 overflow-y-scroll h-[250px] ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>BRAND</h4>
              <div className='my-2'>
                <ul>
                  <li className='py-2'>
                    <input type="checkbox" /> Essence
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Glamour Beauty
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Velvet Touch
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Chic Cosmetics
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Nail Couture
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Calvin Klein
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Chanel
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Gucci
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Annibale Colombo
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Furniture Co.
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Knoll
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Bath Trends
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Apple
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Asus
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Huawei
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Lenovo
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Dell
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Fashion Trends
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Gigabyte
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Classic Wear
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Casual Comfort
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Urban Chic
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Nike
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Puma
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Off White
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Fashion Timepieces
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Fashion Timepieces
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Longines
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Rolex
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Amazon
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Beats
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Techgear
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Gadgetmaster
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Snaptech
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Provision
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Generic Motors
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Kawasaki
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Motogp
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Scootmaster
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Speedmaster
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Attitude
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Olay
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Vaseline
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Oppo
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Puma
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Puma
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Puma
                  </li>
                  <li className='py-2'>
                    <input type="checkbox" /> Puma
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>PRICE</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;Rs. 10 to Rs. 250
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;Rs. 250 to Rs. 500
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;Rs. 500 to Rs. 1000
                  </li>
                  <li className=''>
                    <input type="radio" />&nbsp;Rs. 1000 to Above
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>DISCOUNT RANGE</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;5% and above
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;10% and above
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;15% and above
                  </li>
                  <li className=''>
                    <input type="radio" />&nbsp;20% and above
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>Rating</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;4★ & above
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;3★ & above
                  </li>
                  <li className='pb-3'>
                    <input type="radio" />&nbsp;2★ & above
                  </li>
                  <li className=''>
                    <input type="radio" />&nbsp;1★ & above
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full'  id='product'>
            <div className=' grid lg:grid-cols-4 sm:grid-cols-2 gap-2' id='product-mid'>
              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className=' py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>
              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px] mx-auto' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>

              <div className='w-full rounded-md bg-white shadow-xl  productItems' style={{ border: "1px solid #ccc" }}>
                <figure>
                  <img src="/images/thumbnail.png" className='w-[295px] h-[180px]' alt="" />
                </figure>
                <div className='p-2  productItemsContent'>
                  <h3 className='font-semibold  text-2xl'>
                    Essence Mascara Lash <br /> Princess
                  </h3>
                  <p className='text-gray-800 py-2'>the essence mascara lash princess is a popular mascara known for its...</p>
                  <div className='py-4 flex gap-1.5 items-center  price'>
                    <p className='font-semibold'>Rs.10</p>
                    <span className='text-gray-500 text-xs'>Rs.10</span>
                    <p className='text-[10px] text-red-500'>(7)</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
