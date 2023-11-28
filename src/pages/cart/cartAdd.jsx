import React, { useState } from "react";
import { URLST } from "../../constants/urls";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/cartAddModal/Modal";

function CartAdd({ product, userId, totalAmount }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const page = "orderSuccess";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (totalAmount < 10000) {
      // console.log("product", product);
      // console.log("total amount", totalAmount);

      axios
        .post(`${URLST}/order`, {
          userId: userId,
          products: product,
          totalAmount: totalAmount,
        })
        .then((orderResponse) => {
          // console.log("order response", orderResponse);
          // console.log("input", e.PhoneNo);
          // Initiate payment
          // console.log("######", {
          //   userId: userId,
          //   orderId: orderResponse.data.product.id,
          //   totalAmount: totalAmount,
          //   address: e.PhoneNo,
          // });
          axios
            .post(`${URLST}/payment`, {
              userId: userId,
              orderId: orderResponse.data.product.id,
              totalAmount: totalAmount,
              address: e.PhoneNo,
            })
            .then((paymentResponse) => {
              // console.log("payment response", paymentResponse);
              // console.log("url : ", paymentResponse.data.paymentUrl);
              window.location.href = paymentResponse.data.paymentUrl;

              // Delete cart

              axios
                .delete(`${URLST}/carts/user/${userId}`)
                .then((deleteCartResponse) => {
                  // console.log("Deleted cart with user id ", deleteCartResponse);
                  // Toggle the modal when the flow is successful
                  // setModal((prev) => !prev);
                  // navigate("/Addres"); // Check if this is the correct route
                })
                .catch((deleteCartError) => {
                  console.error(deleteCartError);
                });
            })
            .catch((paymentError) => {
              console.error(paymentError);
            });
          //
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(
        "Please make a small amount of money for the purchase  Because CHAPA cant handle more than 10,000 birr"
      );
    }
  };
  return (
    <div>
      <Modal
        modal={modal}
        page={page}
        setModal={setModal}
        toggleModal={() => setModal((prev) => !prev)}
      />
      {totalAmount === 0 ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className=" ">
            {/* Add an input field for address */}
            <div className="flex gap-2">
              <div>
                {" "}
                <label>Phone Number</label>
              </div>
              <div>
                {" "}
                <input
                  className="h-8 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
                  type="text"
                  id="PhoneNo"
                  placeholder="Type here"
                  {...register("PhoneNo", {
                    required: "PhoneNo is required",
                    pattern: {
                      value: /^0[1-9]\d{8}$/,
                      message:
                        "Please valid phone number (must start like 09****).",
                    },
                  })}
                />
                {errors.PhoneNo && (
                  <p className="text-red-500 text-sm">
                    {errors.PhoneNo.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                className="h-14 flex justify-center p-4 border-[2px] w-40 border-gray-500 rounded-xl bg-white dark:bg-gray-800"
                type="submit"
              >
                Order
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default CartAdd;
