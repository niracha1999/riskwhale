import { MainMenu } from "../components/MainMenu";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";

const profile_individual = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [occupation, setOccupation] = useState("");
  const [institute, setInstitute] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    await axios
      .get(
        "https://api-riskwhale.herokuapp.com/userinfo/ind/" + localStorage.user,
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

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/signin");
  };

  const editProfile = () => {
    router.push("/edit_profile_individual");
  };

  return (
    <div>
      <MainMenu />

      <>
        <div className="pt-36 px-14">
          <h1 className="text-center text-lg text-5xl font-bold leading-6 text-blue-800">
            Individual Profile
          </h1>
        </div>
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
                        <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                          {email}
                        </label>
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
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {firstname}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="occupation"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Occupation
                        </label>
                        <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                          {occupation}
                        </label>
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
                        <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                          {institute}
                        </label>
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
            onClick={editProfile}
            className="w-56 inline-flex justify-center my-24 mr-12 p-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Edit Profile
          </button>
          <button
            onClick={logout}
            className="w-56 inline-flex justify-center my-24 px-4 p-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Out
          </button>
        </div>
      </>
    </div>
  );
};

export default profile_individual;
