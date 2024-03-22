"use client"  // this will convert server component to client

import { useEffect, useState } from "react"

export default function page() {
  const [productsList, setProductsList] = useState([]);
  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductsList(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      Company Route
      All Project done by the company are here...

      <h1 className="mt-5 font-bold">Fetching API on Client component</h1>
      <ul className="ps-5">
        {
          productsList.map((item, index) => (
            <li key={index}>{index+1} &nbsp; {item.title}</li>
          ))
        }
      </ul>

    </div>
  )
}
