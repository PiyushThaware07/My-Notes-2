"use client"


import React, { useEffect, useState } from 'react';

export default function page() {
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        const url = "https://fakestoreapi.com/products";
        const request = await fetch(url);
        const response = await request.json();
        console.log("Client Site Response :", response);
        setProducts(response)
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='p-5'>
            <h1 className='text-xl font-semibold'>Client Site API fetching</h1>
            {
                products.length !== 0 &&
                <ul>
                    {
                        products.map((item, index) => (
                            <li key={index}>{item.id} {item.title}</li>
                        ))
                    }
                </ul>
            }

        </div>
    )
}
