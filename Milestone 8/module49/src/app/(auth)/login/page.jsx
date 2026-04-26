"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleLoginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUP SuccessFul");
    }
  };

  // Watch function er maddome particular field er Data Show
  // console.log(watch('email'))
  // console.log(watch('password'))
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white text-center">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your Account
        </h2>
        <div className="divider mb-6"></div>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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
          <button className="btn btn-soft btn-primary w-full">Login</button>
        </form>
        <p className="mt-4">
          {`Don't have an account? `}{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
