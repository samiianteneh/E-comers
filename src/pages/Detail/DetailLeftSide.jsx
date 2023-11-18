import React from "react";

function DetailLeftSide({ image }) {
  return (
    <div className=" ">
      <img src={"http://" + image}></img>
    </div>
  );
}
export default DetailLeftSide;
