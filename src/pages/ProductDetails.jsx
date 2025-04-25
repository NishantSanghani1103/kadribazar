import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {

    let urlData = useParams()
    let { pid } = urlData
    console.log(pid)

    return (
        <div>
            <h1>Product Details</h1>
        </div>
    )
}
