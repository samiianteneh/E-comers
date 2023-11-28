import React from "react";
import { URLST } from "../../constants/urls";

function DetailLeftSide({ image }) {
  return (
    <div className="">
      <img
        width={300}
        height={500}
        src={`${URLST}/${image}`}
        alt="Product Image"
      />
    </div>
  );
}

export default DetailLeftSide;
