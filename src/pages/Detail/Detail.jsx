import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URLST } from "../../constants/urls";
import DetailHeader from "./DetailHeader";
import DetailLeftSide from "./DetailLeftSide";
import DetailRightSide from "./DetailRightSide";
import DetailBottom from "./DetailBottom";

function Detail() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        // console.log(response.data.product);
        setData(response.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredData = data.find((item) => item.id === id);

  // console.log("FilteredData", filteredData);
  // console.log(localStorage);
  return (
    <div className="App">
      <div className="flex  overflow-auto h-[100vh]">
        <div className="  w-full ">
          <div className="flex items-center justify-center ">
            <div className=" pt-24 pb-4  w-3/5  border-[1px] border-gray-300 h-11/12 rounded-xl    dark:bg-gray-800  bg-gray-50">
              <div className=" border-b-2 border-black dark:bg-gray-700">
                <DetailHeader date={filteredData?.updatedAt} />
              </div>
              <div className=" flex bg-white dark:bg-gray-800 ">
                <div className=" w-7/12 flex justify-center items-center border-r-2     ">
                  <DetailLeftSide image={filteredData?.image} />
                </div>
                <div className=" w-5/12 py-5 pr-5 pl-3 h-full">
                  <DetailRightSide
                    title={filteredData?.productName}
                    description={filteredData?.description}
                    price={filteredData?.price}
                    ratting={filteredData?.ratting}
                    categoryId={filteredData?.categoryId}
                  />
                </div>
              </div>

              <div>
                <DetailBottom productId={filteredData?.id} />
              </div>
              <div className=" border-b-2 mb-3">
                <></>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
