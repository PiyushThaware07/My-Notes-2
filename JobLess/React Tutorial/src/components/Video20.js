import React from "react";
// Import  from app
import { DataContext, FullName } from "../App";

export default function Video20() {
  return (
    <>
      <h1>
        <b>useContext Hook in React JS</b>
      </h1>

      <DataContext.Consumer>
        {(data) => {
          return (
            <FullName.Consumer>
              {(fullname) => {
                return (
                  <p>
                    {data} <br /> {fullname}
                  </p>
                );
              }}
            </FullName.Consumer>
          );
        }}
      </DataContext.Consumer>
    </>
  );
}
