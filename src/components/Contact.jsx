import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bvrywomb", userInfo);
      toast.success("Your Message Has Been Sent!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Get in Touch
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Feel free to reach out for any inquiries or collaborations.
      </p>

      <div className="mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-full p-8 rounded-xl border border-gray-300"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Send Your Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required.</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                {...register("email", { required: true })}
                className="border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required.</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="border rounded-lg py-2 px-3 mt-1 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
