import React from "react";
import { useState } from "react";

function SortByPopularity(props) {
  return (
    <button className="sortByPopularity" onClick={props.sort}>
      Sort By Popularity
    </button>
  );
}

export default SortByPopularity;
