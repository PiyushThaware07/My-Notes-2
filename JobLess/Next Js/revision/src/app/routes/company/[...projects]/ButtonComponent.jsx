"use client"
export default function ButtonComponent(props) {
    return (
        <button type="button" onClick={() => console.log(props.price)} className="px-3 py-2 bg-blue-500 text-white">Click Me</button>
    )
}
