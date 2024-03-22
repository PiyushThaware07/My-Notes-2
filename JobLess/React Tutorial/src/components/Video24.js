import React from "react";
import ReactDOM from "react-dom";

import '../Ads.css';

const Video24 = (props) => {
  return ReactDOM.createPortal(
    <>
      {props.children}
    </>,
    document.getElementById("modal")
  );
};

const ModalContent = () => {
  return (
    <div className="modal">
      <h1>Ad's</h1>
    </div>
  );
};

export default Video24;
export { ModalContent };
