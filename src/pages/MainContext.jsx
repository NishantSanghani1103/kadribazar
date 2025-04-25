import React, { createContext, useEffect, useState } from 'react'

export let counterContext = createContext()
export default function MainContext({ children }) {

    let [count, setcount] = useState(15)

    let [cart, setcart] = useState(JSON.parse(localStorage.getItem("CART")) ?? [])

    let obj = {
        count,
        setcount,
        cart,
        setcart
    }

    useEffect(() => {

        localStorage.setItem("CART", JSON.stringify(cart))
        console.log(cart)
    }, [cart])
    return (
        <div>

            <counterContext.Provider value={obj}>
                {children}
            </counterContext.Provider>
        </div>
    )
}
