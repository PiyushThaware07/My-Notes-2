import React, { useState } from "react";

export default function Video27() {
  const [src, setSrc] = useState("");

  const getImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setSrc(data.message);
  };
  return (
    <>
      <h1>
        <b>Fetch in React JS | API in React JS.</b>
      </h1>

      <div className="">
        <h2>
          <b>Image Generator</b>
        </h2>
        <img src={src} style={{ height: "200px", width: "auto" }} alt="Loading..." />
        <br />
        <button onClick={(event) => getImage()}>Generate</button>
      </div>
    </>
  );
}
