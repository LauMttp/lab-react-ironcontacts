import React from "react";
import "./AddRandom.css";

function AddRandom(props) {
  return (
    <button className="addRandom" onClick={props.addRand}>
      Add Random Contact
    </button>
  );
}

export default AddRandom;
