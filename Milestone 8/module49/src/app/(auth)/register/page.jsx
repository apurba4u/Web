"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleRegisterFunc = async (data) => {
    const { name, email, photo, password } = data;
    console.log(email, name, password, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error)
    if(error) {
      alert(error.message)
    }
    if(res) {
      alert('SignUP SuccessFul')
    }
  };

  return (
    <div>
      {children}
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-xl bg-white text-center">
          <h2 className="font-bold text-3xl text-center mb-6">
            Register your Account
          </h2>
          <div className="divider mb-6"></div>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleRegisterFunc)}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="name"
                className="input"
                placeholder="John David"
                {...register("name", { required: "Name Field is required" })}
              />
              {errors.name ? (
                <span className="text-red-500">{errors.name.message}</span>
              ) : (
                ""
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo URL</legend>
              <input
                type="text"
                className="input"
                placeholder="Type Here Your Photo URL"
                {...register("photo", { required: "Photo URL is required" })}
              />
              {errors.photo ? (
                <span className="text-red-500">{errors.photo.message}</span>
              ) : (
                ""
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                placeholder="example@ovi.com"
                {...register("email", { required: "Email Field is required" })}
              />
              {errors.email ? (
                <span className="text-red-500">{errors.email.message}</span>
              ) : (
                ""
              )}
            </fieldset>
            <fieldset className="fieldset relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={isShowPassword ? 'text' : 'password'}
                className="input"
                placeholder="Password"
                {...register("password", {
                  required: "Password Field is required",
                })}
              />
              <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
              {/* Upore react hook teke form er data fetch kora hoyese */}
              {/* For show error */}
              {errors.password ? (
                <span className="text-red-500">{errors.password.message}</span>
              ) : (
                ""
              )}
            </fieldset>
            <button className="btn btn-soft btn-primary w-full">
              Register
            </button>
          </form>
          <p className="mt-4">
            {`Already Have an Account.`}{" "}
            <Link href={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
