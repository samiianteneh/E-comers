import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";
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
      <div className=" py-5 text-xl text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 font-[Kdam Thmor Pro]  ">
          TITLE :
        </span>{" "}
        {title}
      </div>
      <div className=" py-5 text-xl text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 font-[Kdam Thmor Pro] ">
          price:
        </span>{" "}
        {parseInt(price)}
      </div>
      <div className=" py-5 text-xl text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 font-[Kdam Thmor Pro] ">
          category :{" "}
        </span>{" "}
        {filteredData?.categoryName}
      </div>
      <div className=" py-5 text-xl text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 font-[Kdam Thmor Pro] ">
          description :
        </span>
        {description}
      </div>
      <div className=" py-5 text-xl text-black dark:text-white">
        <span className=" font-bold text-gray-800 dark:text-gray-200 font-[Kdam Thmor Pro] ">
          ratting :
        </span>
        <Rate defaultValue={3} />
      </div>
    </div>
  );
}

export default DetailRightSide;
