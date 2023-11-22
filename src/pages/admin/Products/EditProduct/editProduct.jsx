import { useParams } from "react-router-dom";
import EditProductForm from "./editProductForm";
import { useEffect, useState } from "react";
import axios from "axios";
import InerHeader from "../../../../components/layout/inerHeader";
import { URLST } from "../../../../constants/urls";
import AdminSidebar from "../../adminhome/adminSidebar";

function EditProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        setProductData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  const filteredData = productData.find((item) => item.id === id);

  return (
    <div className="App h-[90vh]">
      <div className="flex h-full ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto ">
          <div className="   mx-10 mt-5 pt-5 dark:bg-gray-800 bg-white ">
            <InerHeader inerContent={"Edit Products"} />
            <div className="bg-gray-100 dark:bg-gray-800 m-4">
              {filteredData && (
                <EditProductForm
                  title={filteredData.productName}
                  image={filteredData.image}
                  price={filteredData.price}
                  description={filteredData.description}
                  id={filteredData.id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
