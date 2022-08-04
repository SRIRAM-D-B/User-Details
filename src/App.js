import React from "react";
import Fetch from "./Fetch";

let App = () => {
  return (
    <div><Fetch link={`https://randomuser.me/api/?results=10`}/></div>
  );
}

export default App;
