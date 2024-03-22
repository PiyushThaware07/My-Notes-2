"use client"

export default function Home() {
  return (
    <div>
      <h1>Server Component</h1>
      <button onClick={()=>alert("Hello")} type="button" className="bg-blue-700 text-white text-sm font-semibold px-2 py-1">Click Me</button>
    </div>
  )
}
