import { useEffect, useState } from "react";
import axios from "axios";
import { URLST } from "../../constants/urls";

function HomeSideBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios

      .get(`${URLST}/category`)
      .then((response) => {
        // console.log(response.data, "********");
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="text-gray-800 bg-white dark:bg-gray-800 dark:text-white h-full m-2 mb-3 text-3xl pl-4 py-2 rounded-lg">
      {data.map((data, index) => (
        <div key={index} className=" ">
          {data.categoryName}
        </div>
      ))}
    </div>
  );
}

export default HomeSideBar;
