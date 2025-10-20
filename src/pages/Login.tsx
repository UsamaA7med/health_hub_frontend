import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Card } from "@heroui/react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives"; 

const Login = () => {
  const [mode, setMode] = useState("login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Card className="w-full max-w-md shadow-2xl rounded-2xl p-8 bg-white/90 backdrop-blur">
          <h1
            className="text-3xl font-bold text-center mb-4 black"
          >
            {mode === "login" ? "Login" : "Create an Account"}
          </h1>

          
          <p className={`${subtitle()} text-center text-gray-500 mt-3 mb-5`}>
            {mode === "login"
              ? "Please login to book an appointment."
              : "Please sign up to book an appointment."}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {mode === "register" && (
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                startContent={<FaUser className="text-gray-400" />}
                radius="lg"
                variant="bordered"
              />
            )}
            {errors.name && (
              <p className="text-red-500 text-sm -mt-2">{errors.name.message}</p>
            )}

            <Input
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
              startContent={<FaEnvelope className="text-gray-400" />}
              radius="lg"
              variant="bordered"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm -mt-2">{errors.email.message}</p>
            )}

            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              startContent={<FaLock className="text-gray-400" />}
              radius="lg"
              variant="bordered"
            />
            {errors.password && (
              <p className="text-red-500 text-sm -mt-2">
                {errors.password.message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-b from-indigo-600 to-indigo-400 text-white py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mt-2"
            >
              {mode === "login" ? "Login" : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-indigo-600 font-semibold hover:underline"
            >
              {mode === "login" ? "Create an account" : "Login"}
            </button>
          </p>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default Login;
