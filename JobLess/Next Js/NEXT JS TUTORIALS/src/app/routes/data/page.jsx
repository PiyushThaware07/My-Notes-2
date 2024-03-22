"use client"


import React, { useEffect, useState } from 'react'

export default function page() {
    const [list, setList] = useState([]);
    async function fetchProducts() {
        const request = await fetch("https://fakestoreapi.com/products");
        const response = await request.json();
        console.log(response);
        setList(response);
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            <ul>
                {
                    list.length === 0 ?
                        "loading data"
                        :
                        (
                            list.map((item, index) => (
                                <li>
                                    <h1>{index} {item.title}</h1>
                                </li>
                            ))
                        )
                }
            </ul>
        </div>
    )
}
