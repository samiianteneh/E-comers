import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLST } from "../../constants/urls";

function DetailRightSide({ title, description, price, categoryId, ratting }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URLST}/category`)
      .then((response) => {
        // console.log("category", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredData = data?.find((item) => item.id === categoryId);
  //   console.log("filteredData category", filteredData, data);
  return (
    <div>
      <div className=" py-5 text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200  ">
          TITLE :
        </span>{" "}
        {title}
      </div>
      <div className=" py-5 text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 ">
          price:
        </span>{" "}
        {price}
      </div>
      <div className=" py-5 text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 ">
          category :{" "}
        </span>{" "}
        {filteredData?.categoryName}
      </div>
      <div className=" py-5 text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 ">
          description :
        </span>
        {description}
      </div>
      <div className=" py-5 text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 ">
          ratting :{" "}
        </span>
        {ratting}
      </div>
    </div>
  );
}

export default DetailRightSide;
