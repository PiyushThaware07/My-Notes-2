import ButtonComponent from "./ButtonComponent";

async function fetchProducts() {
    const url = "https://fakestoreapi.com/products";
    const request = await fetch(url);
    const response = await request.json();
    return response;
}


export default async function page() {
    let products = await fetchProducts();
    console.log("Server Site Response :", products);
    return (
        <div className='p-5'>
            <h1 className='text-xl font-semibold'>Server Site API fetching</h1>
            <ul>
                {
                    products.map((item, index) => (
                        <li key={index}>
                            {item.id}
                            {item.category}
                            {/* Below Button with event listener give error */}
                            {/* <button type="button" onClick={() => alert('("hello")')}>Click Me</button> */}
                            {/* solution of above error  */}
                            <ButtonComponent />
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}