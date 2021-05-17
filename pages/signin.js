import { MainMenu } from "../components/MainMenu";
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const success = () =>
    toast("Login Successfully!", {
      toastId: 1,
    });
  const wrongpass = () =>
    toast.error("Password is wrong", {
      toastId: 2,
    });

  const authen = async () => {
    await axios
      .post("http://api-riskwhale.herokuapp.com/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        const usertype = response.data.type;
        const token = response.data.authtoken;
        const user = response.data.id_company;

        if (
          response.body === "Password is wrong" ||
          response.body === "Please confirm the information"
        ) {
          wrongpass();
          console.log("Bugg from front");
        } else {
          success();
          localStorage.setItem("usertype", usertype);
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          console.log(localStorage.user);
          console.log(localStorage.usertype);
          console.log(localStorage.token);

          if (usertype === "company") {
            router.push("/functions_company");
          } else {
            router.push("/functions_individual");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        wrongpass();
      });
  };

  return (
    <div>
      <MainMenu />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-36 max-w-md w-full space-y-8">
          <div>
            <ToastContainer
              toastId={1}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
            ></ToastContainer>
            <ToastContainer
              toastId={2}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
            ></ToastContainer>
            <img
              className="mx-auto h-20 w-auto"
              src="./assets/main_label.png"
              alt="main_label"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-blue-600">
              Sign in to your account
            </h2>
          </div>
          <form
            method="post"
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              authen();
            }}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  value={email}
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group h-full relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>

          <div>
            <label className="relative flex justify-center font-medium text-blue-600 mt-16 text-lg">
              Don’t have account? Register for free!
            </label>
            <button className=" px-4 py-3 mt-10 h-full relative w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-lightblue-700 hover:bg-lightblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue-600">
              <a href="/signup_individual">Sign up as an individual</a>
            </button>
            <button className=" px-4 py-3 mt-4 h-full relative w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-lightblue-700 hover:bg-lightblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue-600">
              <a href="/signup_company">Sign up as a company</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default signin;
