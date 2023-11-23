import React, { useState } from "react";
import { URLST } from "../../constants/urls";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal/cartAddModal/Modal";

function CartAdd({ product, userId, totalAmount }) {
  const [modal, setModal] = useState(false);
  const page = "orderSuccess";
  const { handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(product);
    console.log(totalAmount);
    axios
      .post(`${URLST}/order`, {
        userId: userId,
        products: product,
        totalAmount: totalAmount,
      })
      .then(() => {
        axios
          .delete(`${URLST}/carts/user/${userId}`)
          .then((response) => {
            console.log("Deleted cart with user id ", response);
            setModal((prev) => !prev);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Modal
        modal={modal}
        page={page}
        setModal={setModal}
        toggleModal={() => setModal((prev) => !prev)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="mt-10 flex justify-center">
          <button
            className="h-14 flex justify-center p-4 border-[2px] w-40 border-gray-500 rounded-xl bg-white dark:bg-gray-800"
            type="submit"
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CartAdd;
