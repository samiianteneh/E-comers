import React from "react";
import moment from "moment";

function DetailHeader({ date }) {
  const formattedDate = moment(date).format("DD-MM-YYYY");

  return (
    <div>
      <div className=" flex justify-between  px-10 font-bold pb-2">
        <div>PRODUCT DETAIL</div>
        <div>
          <span className=" font-light">created at : </span>
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default DetailHeader;
