import { FaCartArrowDown, FaCheckCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

function Button({ page }) {
  return (
    <div>
      <div className=" mx-32 my-14  ">
        <div
          className="
               text-green-700 text-
                mx-auto mt-auto rounded-full w-40 h-40
               flex items-center justify-center"
        >
          {page === "cartSuccess" ? (
            <FaCartArrowDown className="w-full h-full" />
          ) : page === "orderSuccess" ? (
            <LuPackageOpen className="w-full h-full" />
          ) : null}
          {/* <FaCheckCircle className="w-full h-full" /> */}
        </div>
        <div className=" text-center">
          <div className=" my-10 text-green-700 text-3xl "> Congragulation</div>
          <div className=" my-10 text-gray-400 text-xl ">
            <div>
              {page === "cartSuccess" ? (
                <>You successfully added a product to the cart</>
              ) : page === "orderSuccess" ? (
                <>
                  You have successfully ordered a product. It will be delivered
                  as soon as possible.
                </>
              ) : null}
            </div>
            <div>Thank You</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
