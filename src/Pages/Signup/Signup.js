import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  const saveUser = (name, email, role) => {
    const user = { name, email };
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleSignUp = (data) => {
    setSignUPError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name, data.email, data.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <h2 className="text-3xl text-center mb-10 font-semibold">
                Registration
              </h2>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>

                <select
                  className="select select-bordered w-full"
                  {...register("role")}
                >
                  <option value="buyer" defaultValue="buyer">
                    Buyer
                  </option>
                  <option value="seller">Seller</option>
                </select>

                <div className="flex justify-between items-center mb-6">
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <div>
                  {signUpError && <p className="text-red-600">{signUpError}</p>}
                </div>
                <p>
                  Already have an account?{" "}
                  <Link className="text-red-300" to="/login">
                    Login here
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
