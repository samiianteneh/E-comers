import React from "react";
import { Link } from "react-router-dom";
import { URLST } from "../../constants/urls";

function EachProduct({ title, image, price, id }) {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  return (
    <div>
      <div className="p-10 ">
        <div className=" bg-gray-200 dark:bg-gray-900 p-2 font-bold text-lg">
          {title}
        </div>

        <div className=" text-[#5f5f5f] flex justify-center ">
          <img
            width={200}
            height={300}
            src={`${URLST}/${image}`}
            alt="Product Image"
          />
        </div>
        <div className=" mt-4">
          <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-900 p-2">
            <div className="">
              <button className="  rounded pl-3 pr-3 ">price : {price}</button>
            </div>
            <div className="">
              <button className=" ml-4 bg-gray-100 dark:bg-gray-800 p-1 text-lg">
                <div>
                  {tokens && name ? (
                    <>
                      <Link to={`/Detail/${id}`}>Detail</Link>
                    </>
                  ) : (
                    <Link to={"/Signin"}>Detail</Link>
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
