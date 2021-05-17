import { MainMenu } from "../components/MainMenu";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const edit_profile_individual = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypepassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [occupation, setOccupation] = useState("");
  const [institute, setInstitute] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const wrongpass = () =>
    toast.error("Password is not matched", {
      toastId: 2,
    });

  const fetchItems = async () => {
    await axios
      .get(
        "http://api-riskwhale.herokuapp.com/userinfo/ind/" + localStorage.user,
        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response);

        setEmail(response.data.email);
        setFirstname(response.data.firstname);
        setOccupation(response.data.occupation);
        setInstitute(response.data.institute);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveItems = async () => {
    if (password === retypepassword) {
      await axios
        .post(
          "http://api-riskwhale.herokuapp.com/userinfo/ind/" +
            localStorage.user +
            "/edit",
          {
            email: email,
            password: password,
            retypepassword: retypepassword,
            firstname: firstname,
            occupation: occupation,
            institute: institute,
          },
          {
            headers: {
              "auth-token": localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("password is not the same");
      wrongpass();
    }
  };

  const saveProfile = () => {
    saveItems();
    router.push("/profile_individual");
  };

  return (
    <div>
      <MainMenu />

      <>
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            saveProfile();
          }}
        >
          <div className="pt-36 px-14">
            <h1 className="text-center text-lg text-5xl font-bold leading-6 text-blue-800">
              Individual Profile
            </h1>
          </div>
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
          <div className="pt-14 px-14">
            <div className="md:grid md:grid-cols-3 md:gap-6 ">
              <div className="md:col-span-1 px-14">
                <div className="px-4 sm:px-0">
                  <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                    Account
                  </h3>
                  <p className="mt-1 text-sm text-blue-800">
                    Account information will be used for authentication.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Email address
                        </label>
                        <div className="mt-1 w-6/12 flex rounded-md shadow-sm">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" ex. riskwhale@company.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Password
                      </label>
                      <div className="h-6 w-6/12 mt-1 flex rounded-md shadow-sm ">
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          id="password"
                          name="password"
                          autoComplete="password"
                          className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="password must have at least 8 characters"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="retypepassword"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Re-type Password
                      </label>
                      <div className="h-6 w-6/12 mt-1 flex rounded-md shadow-sm ">
                        <input
                          value={retypepassword}
                          onChange={(e) => setRetypepassword(e.target.value)}
                          id="retypepassword"
                          name="retypepassword"
                          type="password"
                          autoComplete="retypepassword"
                          className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="type password again to confirm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0 px-14">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1 px-14">
                <div className="px-4 sm:px-0">
                  <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-blue-800">
                    Fill-in company name and busienss model canvas for further
                    use. The business model canvas will be saved with other
                    account information.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="firstname"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Full name
                        </label>
                        <input
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="occupation"
                            className="block text-sm font-medium text-blue-800"
                          >
                            Occupation
                          </label>
                          <input
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            type="text"
                            name="occupation"
                            id="occupation"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="institute"
                            className="block text-sm font-medium text-blue-800"
                          >
                            Institute or Organization Name
                          </label>
                          <input
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)}
                            type="text"
                            name="institute"
                            id="institute"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button
              type="submit"
              className="w-56 inline-flex justify-center my-24 mr-12 p-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default edit_profile_individual;
