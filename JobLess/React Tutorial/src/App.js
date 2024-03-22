import Video4 from "./components/Video4";
import Video5 from "./components/Video5";
import Video6 from "./components/Video6";
import Video7 from "./components/Video7";
import Video9 from "./components/Video9";
import Video10 from "./components/Video10";
import Video11 from "./components/Video11";
import Video12 from "./components/Video12";
// import Video13 from "./components/Video13";
import Video14 from "./components/Video14";
import Video17 from "./components/Video17";
import Video18 from "./components/Video18";
import Video19 from "./components/Video19";
import Video20 from "./components/Video20";
import Video21 from "./components/Video21";
import Video24, { ModalContent } from "./components/Video24";
import Video27 from "./components/Video27";
import UseContextHook from "./components/UseContextHook";

// Tools
import PropTypes from "prop-types";
import React, { createContext } from "react";
import SigninWithGoogle from "./components/SigninWithGoogle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Firebase google signin
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

// Context Api
const DataContext = createContext();
const FullName = createContext();

// Usecontext hook
const FirstName = createContext();
const LastName = createContext();
const Details = createContext();
const dataObject = {
  key1: "value1",
  key2: "value2",
};

export default function App(props) {

  // firebase google login
  // const navigate = useNavigate();
  const [user] = useAuthState(auth);



  function childToParent(arg) {
    alert(`Child to parent props passing ${arg}`);
  }
  return (
    <>
      <Video4 name="Piyush" roll="233" />
      <hr />
      <Video5 />
      <hr />
      <Video6 name="Piyush" roll="233" />
      <hr />
      <Video7 />
      <hr />
      <Video9 handler={childToParent} />
      <hr />
      <Video10 />
      <hr />
      <Video11 />
      <hr />
      <Video12>
        <p>This is a paragraph inside the Card component.</p>
      </Video12>
      <Video12>
        <h2>Hello, I'm a nested heading!</h2>
        <p>And I'm a nested paragraph inside the Card component.</p>
      </Video12>
      <hr />
      {/* <Video13 /> */}
      13
      <hr />
      <Video14 />
      <hr />
      <Video17 />
      <hr />
      <Video18 />
      <hr />
      <Video19 />
      <hr />
      <DataContext.Provider value={"only one data item can be passed"}>
        <FullName.Provider value={"Nested Context Api"}>
          <Video20 />
        </FullName.Provider>
      </DataContext.Provider>
      <hr />
      <Video21 />
      <hr />
      <Video24>
        <ModalContent />
      </Video24>
      <hr />
      <Video27 />
      <hr />
      {/* Props can be passeddirectily to any compoennts */}
      <FirstName.Provider value="Herik">
        <LastName.Provider value="sevak">
          <Details.Provider value={dataObject}>
            <UseContextHook />
          </Details.Provider>
        </LastName.Provider>
      </FirstName.Provider>

      <hr />
      <Router>
        <SigninWithGoogle />
        
        <Routes>
          <Route path="/loginsuccess" element={<h1><b>Login Successfully</b></h1>} />
        </Routes>
        {user?(
          <small>
            {user.displayName} <br />
            {user.email} <br />
            {user.phoneNumber} <br />
          </small>
        ):""}
      </Router>
    </>
  );
}

// COntext Api
export { DataContext, FullName, FirstName, LastName, Details };

App.prototypes = {
  name: PropTypes.string,
  roll: PropTypes.string,
};
App.defaultProps = {
  name: "default Name",
  roll: "default roll",
};
