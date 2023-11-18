import React from "react";
import { Link } from "react-router-dom";

function EachProduct({ title, image, price, id }) {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  return (
    <div>
      <div className="p-10 relative">
        <div className=" text-blue-800 font-bold">{title}</div>

        <div className=" text-black font-medium mt-4 mb-4">Image</div>
        <div className=" text-[#5f5f5f] ">
          <img src={"http://" + image}></img>
        </div>
        <div className=" mt-4">
          <div className="flex justify-between">
            <div className="">
              <button className=" bg-blue-600 rounded pl-3 pr-3 text-white">
                price : {price}
              </button>
            </div>
            <div className="">
              <button className=" ml-4  text-blue-600">
                <div>
                  {tokens && name ? (
                    <>
                      <Link to={`/Detail/${id}`}>Detail</Link>
                    </>
                  ) : (
                    <div>Detail</div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
