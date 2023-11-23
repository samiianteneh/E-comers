import { useEffect, useState } from "react";
import axios from "axios";
import { URLST } from "../../constants/urls";

function HomeSideBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URLST}/category`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onClick = (id, categoryName) => {
    console.log("id :", id);
    console.log("name : ", categoryName);
  };

  return (
    <div
      className="
    text-gray-800 bg-white dark:bg-gray-800 dark:text-white
    h-full m-2 mb-3 text-3xl pl-4 py-2 rounded-lg overflow-x-hidden overflow-y-scroll"
    >
      {data.map((category, index) => (
        <div key={category.id} className="pb-5">
          <button onClick={() => onClick(category.id, category.categoryName)}>
            {category.categoryName}
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomeSideBar;
