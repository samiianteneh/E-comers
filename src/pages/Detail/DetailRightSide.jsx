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
      <div className=" py-5 text-gray-600">
        <span className=" font-bold text-black">TITLE :</span> {title}
      </div>
      <div className=" py-5 text-gray-600">
        <span className=" font-bold text-black">price:</span> {price}
      </div>
      <div className=" py-5 text-gray-600">
        <span className=" font-bold text-black">category : </span>{" "}
        {filteredData?.categoryName}
      </div>
      <div className=" py-5 text-gray-600">
        <span className=" font-bold text-black">description :</span>
        {description}
      </div>
      <div className=" py-5 text-gray-600">
        <span className=" font-bold text-black">ratting : </span>
        {ratting}
      </div>
    </div>
  );
}

export default DetailRightSide;
