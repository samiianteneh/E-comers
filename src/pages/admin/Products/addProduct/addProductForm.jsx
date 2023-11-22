import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URLST } from "../../../../constants/urls";

function AddProductForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${URLST}/category`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = (data) => {
    // console.log({
    //   productName: data.name,
    //   price: data.price,
    //   file: data.image,
    //   description: data.Description,
    //   categoryId: data.Category,
    // });
    axios
      .post(
        `${URLST}/product`,
        {
          productName: data.name,
          price: data.price,
          file: data.image[0],
          description: data.Description,
          categoryId: data.Category,
        },
        {
          headers: {
            "Content-type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        }
      )
      .then((response) => {
        console.log("Response Data", response.data);
        // console.log("Response message", response.data.message);
        navigate("/ManageProducts");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 py-3 ">
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
            <label>Category</label>
          </div>
          <div className="pt-2">
            <select
              className="w-full h-10 pl-2 border-[1px] border-black rounded dark:text-black bg-white"
              id="Category"
              name="Category"
              {...register("Category", {
                required: "Category is required",
              })}
              aria-label="Category"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            {errors.Category && (
              <p className="text-red-500 text-sm">{errors.Category.message}</p>
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
              placeholder="Type here"
              {...register("Description", {
                required: "Description is requierd",
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
              {...register("image", { required: "Image is Requierd" })}
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

export default AddProductForm;
