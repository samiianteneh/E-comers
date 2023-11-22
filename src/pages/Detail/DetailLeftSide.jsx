import React from "react";
import { URLST } from "../../constants/urls";

function DetailLeftSide({ image }) {
  return (
    <div className=" ">
      <img src={`${URLST}/${image}`}></img>
    </div>
  );
}
export default DetailLeftSide;
