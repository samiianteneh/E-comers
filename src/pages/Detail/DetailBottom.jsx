import React from "react";
import BackButton from "../../components/layout/backButton";

function DetailBottom() {
  return (
    <div className="  px-20  py-3 border-t-2 border-black flex justify-between">
      <button className=" bg-green-600 rounded pl-3 pr-3 text-white">
        Add To Cart
      </button>
      <button className=" bg-red-600 rounded pl-3 pr-3 text-white">
        <BackButton />
      </button>
    </div>
  );
}

export default DetailBottom;
