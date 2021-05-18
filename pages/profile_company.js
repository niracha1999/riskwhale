import { MainMenu } from "../components/MainMenu";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const profile_company = () => {
  const router = useRouter();

  const [inputFields, setInputFields] = useState([{ id: "", dept: "" }]);
  const [email, setEmail] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [keypartners, setKeypartners] = useState("");
  const [keyactivities, setKeyactivities] = useState("");
  const [keyresources, setKeyresources] = useState("");
  const [valueproposition, setValueproposition] = useState("");
  const [customerrelationships, setCustomerrelationships] = useState("");
  const [channels, setChannels] = useState("");
  const [customersegments, setCustomersegments] = useState("");
  const [coststructure, setCoststructure] = useState("");
  const [revenuestream, setRevenuestream] = useState("");
  const [confirmedname, setConfirmedname] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    await axios
      .get(
        "https://api-riskwhale.herokuapp.com/userinfo/company/" +
          localStorage.user,
        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.functionaldepartments);

        setEmail(response.data.email);
        setCompanyname(response.data.companyname);
        setKeypartners(response.data.businessmodel.keypartners);
        setKeyactivities(response.data.businessmodel.keyactivities);
        setKeyresources(response.data.businessmodel.keyresources);
        setValueproposition(response.data.businessmodel.valueproposition);
        setCustomerrelationships(
          response.data.businessmodel.customerrelationships
        );
        setChannels(response.data.businessmodel.channels);
        setCustomersegments(response.data.businessmodel.customersegments);
        setCoststructure(response.data.businessmodel.coststructure);
        setRevenuestream(response.data.businessmodel.revenuestream);
        setConfirmedname(response.data.confirmed);
        setInputFields(
          response.data.functionaldepartments.map(
            ({ _id: id, name: dept }) => ({
              id,
              dept,
            })
          )
        );
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
    router.push("/edit_profile_company");
  };

  return (
    <div>
      <MainMenu />

      <>
        <div className="pt-36 px-14">
          <h1 className="text-center text-lg text-5xl font-bold leading-6 text-blue-800">
            Company Profile
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
                  Company Information
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
                        htmlFor="companyname"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Company name
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {companyname}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <legend className="block text-sm font-medium text-blue-800 leading-9">
                        Business Model Canvas
                      </legend>
                      <label
                        htmlFor="keypartners"
                        className="block text-sm font-medium text-blue-700 pt-4"
                      >
                        Key Partners
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {keypartners}
                      </label>
                      <label
                        htmlFor="keyactivities"
                        className="block text-sm font-medium text-blue-700"
                      >
                        Key Activities
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {keyactivities}
                      </label>
                      <label
                        htmlFor="keyresources"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Key Resources
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {keyresources}
                      </label>
                      <label
                        htmlFor="valuepropositions"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Value Propositions
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {valueproposition}
                      </label>
                      <label
                        htmlFor="customerrelationships"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Customer Relationships
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {customerrelationships}
                      </label>
                      <label
                        htmlFor="channels"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Channels
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {channels}
                      </label>
                      <label
                        htmlFor="customersegments"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Customer Segments
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {customersegments}
                      </label>
                      <label
                        htmlFor="coststructure"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Cost Structure
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {coststructure}
                      </label>
                      <label
                        htmlFor="revenuestreams"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Revenue Streams
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {revenuestream}
                      </label>
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

        <div className="mt-10 sm:mt-0 px-14" id="scroller">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 px-14">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                  List of Functional Areas
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  List all functional areas in your company for further analysis
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      List functional areas in order
                    </legend>
                    {inputFields.map((inputField) => (
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div
                            key={inputField.id}
                            className="flex items-center h-5"
                          >
                            <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                              {inputField.dept}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </fieldset>
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
                  Information Confirmation
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  Type full name to confirm that the provided information is
                  true.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="confirmedname"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Full name
                      </label>
                      <label className="flex-1 block rounded-none rounded-r-md sm:text-sm text-blue-700 font-semibold">
                        {confirmedname}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default profile_company;
