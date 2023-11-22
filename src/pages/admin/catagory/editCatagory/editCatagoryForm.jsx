import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { URLST } from "../../../../constants/urls";

function EditCatagoryForm({ description, categoryName }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .patch(`${URLST}/category/${id}`, {
        categoryName: data.name,
        description: data.description,
      })
      .then((response) => {
        console.log("Response Data", response);
        navigate("/ManageCart");
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
            <label htmlFor="name">Cart Name</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="name"
              defaultValue={categoryName}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Please enter a valid description.",
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
            <label htmlFor="description">Description</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded dark:text-black bg-white"
              type="text"
              id="description"
              defaultValue={description}
              {...register("description", {
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Please enter a valid description.",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
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

export default EditCatagoryForm;
