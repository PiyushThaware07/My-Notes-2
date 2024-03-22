"use client"


export default function ButtonComponent() {
    return (
        <button type="button" className="bg-blue-500 px-5 py-1 text-white mb-5 ms-5" onClick={() => alert('Hello World')}>Click Me</button>
    )
}