import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

export default function UpdateProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();


  // Fetch Single Product
  async function fetchProduct() {
    let url = `http://localhost:1000/singleProduct/${id}`;
    let response = await fetch(url);
    let jsonData = await response.json();
    setName(jsonData.name);
    setPrice(jsonData.price);
    setCategory(jsonData.category);
    setCompany(jsonData.company);
  }
  useEffect(() => {
    fetchProduct();
  }, [])
  console.log(name, price, category, company);

  // Update Product 
  async function updateProduct(e) {
    e.preventDefault();
    let url = `http://localhost:1000/updateProduct/${id}`;
    let update = await fetch(url,{
      method:'put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    update = await update.json();
    navigate('/');
  }


  return (
    <div className='w-full h-[430px] flex flex-nowrap items-center justify-center' >
      <div className="w-[40%]">
        <h1 className='text-md font-bold'>Update Product</h1>
        <form action="" className='flex flex-nowrap flex-col' onSubmit={updateProduct}>
          <input
            name='name'
            type="text"
            placeholder='update name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-b-[1.4px] focus:outline-none p-2 my-3' />
          <input
            name='price'
            type="number"
            placeholder='update price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-b-[1.4px] focus:outline-none p-2 my-3' />
          <input
            name='category'
            type="text"
            placeholder='update category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border-b-[1.4px] focus:outline-none p-2 my-3' />
          <input
            name='company'
            type="text"
            placeholder='update company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className='border-b-[1.4px] focus:outline-none p-2 my-3' />
          <button type='submit' className='my-3 border-2 border-gray-300 text-gray-300 hover:text-white hover:bg-gray-300 transition-all shadow-sm p-3 font-bold text-sm w-[100px]'>Update</button>
        </form>

      </div>
    </div>
  )
}
