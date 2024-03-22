import React from "react";

function Video4(props) {
  const { name, roll } = props;
  return (
    <>
      <h1>
        <b>ReactJS De-structuring props | Default Props | PropTypes</b>
      </h1>
      <small>
        Name : {name} <br />
        Roll No : {roll}
      </small>
    </>
  );
}
export default Video4;