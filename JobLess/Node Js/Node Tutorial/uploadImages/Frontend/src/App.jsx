import React, { useEffect, useState } from "react";

export default function App() {
  const [fname, setFname] = useState("piyush");
  const [lname, setLname] = useState("thaware");
  const [image, setImage] = useState('');

  async function uploadData(event) {
    event.preventDefault();
    console.log("Request : ", { fname, lname, image });

    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("image", image);

    const url = "http://localhost:1000/api/upload";
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const response = await request.json();
    console.warn("Response : ", response);
  }

  // ----------------------------------------------
  const [myData, setMyData] = useState([]);
  async function fetchData() {
    const request = await fetch("http://localhost:1000/", {
      method: "get"
    });
    const response = await request.json();
    console.log("response : ", response);
    setMyData(response)
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={uploadData}>
        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br /> <br />
        <input
          type="file"
          placeholder="Upload Image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>


      {
        myData.length > 0
        &&
        (
          <>
            {
              myData.map((item, index) => (
                <div key={index}>
                  <img src={`http://localhost:1000/uploads/${item.image}`} alt="loading" height='400' width='400' />
                  <h1>{item.fname}</h1>
                  <h1>{item.lname}</h1>
                </div>
              ))
            }

          </>
        )
      }
    </div>
  );
}
