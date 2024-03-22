import React, { useState } from 'react';
// ICONS
import { IoBagAdd } from "react-icons/io5";

export default function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    async function AddProductForm(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;
        console.warn("Add Product :", userId, name, price, category, company);

        const addToDB = await fetch('http://localhost:1000/insertproduct', {
            method: 'post',
            body: JSON.stringify({ userId, name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let consoleResult = await addToDB.json();
        console.log(consoleResult);
    }

    

    return (
        <div className='h-[420px] w-full'>
            <div className="p-6">
                <h1 className='text-xl font-bold py-3 border-b-2 border-gray-200 flex flex-nowrap items-center gap-1'><IoBagAdd size={23} />Add Product</h1>
                <form action="" className='flex flex-nowrap flex-col p-5 w-[40%]' onSubmit={AddProductForm}>
                    <input
                        type="text"
                        placeholder='Product Name'
                        className='border-b-[1.5px] border-gray-200 p-3 mb-3 focus:outline-none'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    <input
                        type='number'
                        placeholder='Product Price'
                        className='border-b-[1.5px] border-gray-200 p-3 mb-3 focus:outline-none'
                        name='price'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                    <input
                        type="text"
                        placeholder='Product Category'
                        className='border-b-[1.5px] border-gray-200 p-3 mb-3 focus:outline-none'
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category} />
                    <input
                        type="text"
                        placeholder='Product Company'
                        className='border-b-[1.5px] border-gray-200 p-3 mb-3 focus:outline-none'
                        name='company'
                        onChange={(e) => setCompany(e.target.value)}
                        value={company} />
                    <button type='submit' className='p-3 bg-gray-200 w-[120px] font-bold border-2 border-gray-400 text-gray-500 hover:bg-gray-400 hover:text-white transition-all'>Add</button>
                </form>
            </div>
        </div>
    )
}
