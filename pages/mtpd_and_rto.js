import React, { useState, useEffect } from "react";
import { MainMenu } from "../components/MainMenu";
import axios from "axios";

const mtpd_and_rto = () => {
  const [data, setData] = useState({ areas: [] });
  const [openTab, setOpenTab] = React.useState(0);

  useEffect(async () => {
    const result = await axios(
      "http://api-riskwhale.herokuapp.com/userinfo/ind/" + localStorage.user,
      {
        headers: {
          "auth-token": localStorage.token,
        },
      }
    );

    setData({
      areas: result.data.functionaldepartments,
    });
  }, []);
  return (
    <div>
      <MainMenu />
      <>
        <div className="pt-20">
          <div className="flex-1 flex block">
            <nav class="fixed bg-blue-600 w-64 h-screen">
              <div className="mt-10 mb-4">
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 1 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                  >
                    <span class="ml-2">
                      Maximum Tolerable <br /> Period of Disruption
                    </span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 2 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                  >
                    <span class="ml-2">Recovery Time Objective</span>
                  </a>
                </li>
              </div>
            </nav>

            <div className="pb-4 py-5">
              <div class="ml-64 py-2 flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <span>
                    <div className="md:col-span-1 pl-14 mt-6">
                      <div className="sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Maximum Tolerable Period of Disruption
                        </h3>
                        <p className="mt-1 text-sm text-blue-800">
                          Time it would take for adverse impacts, which might
                          arise as a result of not providing a product/service
                          or performing and activity, to become unacceptable.
                        </p>
                      </div>
                      <div className="sm:px-0 mt-8">
                        <h3 className="text-2xl font-semibold leading-10 text-blue-700">
                          Things to consider
                        </h3>
                        <p className="mt-1 text-sm text-blue-700">
                          After the MTPD, the impact become too large and is not
                          recoverable.
                        </p>
                      </div>
                    </div>

                    <div className="md:mt-0 md:col-span-2">
                      <div className="relative my-14 w-6/12 mx-64 shadow sm:rounded-md sm:overflow-hidden">
                        <div className="py-5 bg-white space-y-6 sm:p-6">
                          <div>
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-blue-800"
                            >
                              Fill-in MTPD of each area
                            </label>
                            {data.areas.map((area) => (
                              <div
                                key={area._id}
                                className="h-6 ml-4 mt-4 flex rounded-md shadow-sm"
                              >
                                <label className="text-sm pl-2 font-medium text-blue-700">
                                  {area.name}
                                </label>

                                <input
                                  id="objective"
                                  name="objective"
                                  type="text"
                                  required
                                  className="ml-4 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  placeholder=" type number of day"
                                />
                                <label className="block text-sm pl-2 font-medium text-blue-700">
                                  day(s)
                                </label>
                              </div>
                            ))}
                          </div>

                          <div>
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-blue-800"
                            >
                              MTPD of the company
                            </label>

                            <div className="h-6 w-2/5 ml-4 mt-1 flex rounded-md shadow-sm">
                              <input
                                id="likelihood"
                                name="objective"
                                type="text"
                                required
                                className="ml-4 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder=" type number of day"
                              />
                              <label className="block text-sm pl-2 font-medium text-blue-700">
                                day(s)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="justify-self-center mt-2 text-sm inline-flex py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Next
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <span>
                    <div className="md:col-span-1 pl-14 mt-6">
                      <div className="sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Recovery Time Objective
                        </h3>
                        <p className="mt-1 text-sm text-blue-800">
                          Period of time following an incident within which
                          product or service must be resumed, or activity must
                          be resumed, or resources must be recovered.
                        </p>
                      </div>
                      <div className="sm:px-0 mt-8">
                        <h3 className="text-2xl font-semibold leading-10 text-blue-700">
                          Things to consider
                        </h3>
                        <p className="mt-1 text-sm text-blue-700">
                          During this time, your company can be down without
                          causing significant damage to the business. The sooner
                          the cost is going to be higher.
                        </p>
                      </div>
                    </div>

                    <div className="md:mt-0 md:col-span-2">
                      <div className="relative my-14 w-6/12 mx-64 shadow sm:rounded-md sm:overflow-hidden">
                        <div className="py-5 bg-white space-y-6 sm:p-6">
                          <div>
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-blue-800"
                            >
                              Fill-in RTO of each area
                            </label>
                            {data.areas.map((area) => (
                              <div
                                key={area._id}
                                className="h-6 ml-4 mt-4 flex rounded-md shadow-sm"
                              >
                                <label className="text-sm pl-2 font-medium text-blue-700">
                                  {area.name}
                                </label>
                                <input
                                  id="likelihood"
                                  name="objective"
                                  type="text"
                                  required
                                  className="ml-4 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  placeholder=" type number of day"
                                />
                                <label className="block text-sm pl-2 font-medium text-blue-700">
                                  day(s)
                                </label>
                              </div>
                            ))}
                          </div>

                          <div>
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-blue-800"
                            >
                              RTO of the company
                            </label>

                            <div className="h-6 w-2/5 ml-4 mt-1 flex rounded-md shadow-sm">
                              <input
                                id="likelihood"
                                name="objective"
                                type="text"
                                required
                                className="ml-4 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder=" type number of day"
                              />
                              <label className="block text-sm pl-2 font-medium text-blue-700">
                                day(s)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="justify-self-center mt-2 text-sm inline-flex py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Proceed to Result
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default mtpd_and_rto;
