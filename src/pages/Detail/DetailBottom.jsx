import React, { useState } from "react";
import BackButton from "../../components/layout/backButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { URLST } from "../../constants/urls";
import Modal from "../../components/Modal/cartAddModal/Modal";

function DetailBottom({ productId }) {
  const [modal, setModal] = useState(false);
  const userId = localStorage.getItem("userID");
  const page = "cartSuccess";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${URLST}/carts`, {
        productId: productId,
        userId: userId,
        Quantity: parseInt(data.Quantity),
      })
      .then((response) => {
        // console.log("response : ", response);
        setModal((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="px-20 py-3 border-t-2 border-black flex justify-between">
      <Modal
        modal={modal}
        page={page}
        setModal={setModal}
        toggleModal={() => setModal((prev) => !prev)}
      />
      <div className="bg-red-600 rounded pl-3 pr-3 text-white">
        <BackButton />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        <div className=" px-4">
          <div>
            <label htmlFor="Quantity">Quantity</label>
          </div>
          <div>
            <input
              className="h-8 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="number"
              id="Quantity"
              placeholder="Type here"
              {...register("Quantity", {
                required: "Quantity is required",
                pattern: {
                  value: /^[1-9][0-9]*(\.[0-9]+)?$/,
                  message: "Please enter a positive number.",
                },
              })}
            />
            {errors.Quantity && (
              <p className="text-red-500 text-sm">{errors.Quantity.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 rounded pl-3 pr-3 text-white"
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}

export default DetailBottom;
