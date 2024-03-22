import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let url = "http://localhost:1000/products"
    let response = await fetch(url);
    let jsonData = await response.json();
    setProducts(jsonData);
  }
  useEffect(() => {
    getProducts();
  }, [])
  console.log(products);


  // Delete Product
  async function deleteProduct(productId) {
    console.log(productId);
    let url = `http://localhost:1000/deleteProduct/${productId}`;
    let response = await fetch(url, {
      method: "Delete",
    });
    response = await response.json();
    if (response) {
      getProducts();
    }
  }

  return (
    <div>
      <h1 className='font-bold'>Product List</h1>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 && products ?
              products.map((product, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td><button type='button' className='text-sm bg-red-500 text-white font-bold p-2 ' onClick={() => deleteProduct(product._id)}>Delete Product</button></td>
                  <td><button><Link to={`/update/${product._id}`} className='text-sm bg-green-500 text-white font-bold p-2 '>Update</Link></button></td>
                </tr>
              ) :
              null
          }
        </tbody>
      </table>
    </div>
  )
}
