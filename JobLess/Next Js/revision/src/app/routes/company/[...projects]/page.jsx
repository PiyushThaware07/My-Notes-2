import ButtonComponent from "./ButtonComponent";

async function FetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}



export default async function page({ params }) {
  // INPUT : http://localhost:3000/routes/company/day1/project1
  console.log(params);
  // OUTPUT : { projects: [ 'day1', 'project1' ] }

  let fetchproduct = await FetchProducts();
  console.log(fetchproduct);

  return (
    <div>
      {params.projects}
      <h1>Projects </h1>

      <h1 className="mt-5 font-bold ps-5">Fetching API on Server Component</h1>
      <ul className="ps-10">
        {/* Render Button with event listener in server component */}
        {fetchproduct.map((item, index) => (
            <li key={index}>{index + 1} {item.title} <ButtonComponent price={item.price} /></li>
          ))}
      </ul>


    </div>
  )
}
