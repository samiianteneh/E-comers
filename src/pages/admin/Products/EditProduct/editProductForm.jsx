import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { URLST } from "../../../../constants/urls";

function EditProductForm({ title, description, image, price, id }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .patch(`${URLST}/product/${id}`, {
        productName: data.name,
        price: data.price,
        description: data.Description,
        image: data.image ? data.image[0] : undefined,
      })
      .then((response) => {
        // console.log("Response Data", response);
        if (response.data) {
          alert(response.data.msg);
          navigate("/ManageProducts");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 py-5">
        <div className="py-2">
          <div>
            <label>Title</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded bg-white  dark:text-black"
              type="text"
              placeholder="Type here"
              id="name"
              defaultValue={title}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Please enter a valid name with only letters.",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="py-2">
          <div>
            <label>Price</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded  dark:text-black bg-white"
              type="tel"
              id="price"
              placeholder="Type here"
              defaultValue={price}
              {...register("price", {
                required: "Price is required",
                pattern: {
                  value: /^[1-9]\d*$/,
                  message: "Please enter a valid positive integer for price.",
                },
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="py-2">
          <div>
            <label>Description</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded  dark:text-black bg-white"
              type="text"
              id="Description"
              defaultValue={description}
              {...register("Description", {
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message:
                    "Description should only contain letters, spaces, hyphens, and apostrophes.",
                },
              })}
            />
            {errors.Description && (
              <p className="text-red-500 text-sm">
                {errors.Description.message}
              </p>
            )}
          </div>
        </div>

        <div className="py-2">
          <div>
            <label>Product image</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-12 py-2 pl-2 border-[1px] border-black rounded  dark:text-black bg-white"
              type="file"
              id="image"
              placeholder="Type here"
              {...register("image")}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProductForm;
