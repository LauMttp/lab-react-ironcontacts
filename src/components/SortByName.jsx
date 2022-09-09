import React from "react";
import { useState } from "react";

function SortByName(props) {
  return (
    <button className="sortByName" onClick={props.sort}>
      SortByName
    </button>
  );
}

export default SortByName;
