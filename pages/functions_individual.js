import React, { useEffect, useState } from "react";
import { MainMenu } from "../components/MainMenu";

import { useRouter } from "next/router";

const functions_individual = () => {
  const router = useRouter();
  const [businesstype, setBusinessType] = useState("");
  console.log(businesstype);

  const sendBusinessTypetoBIA = async () => {
    localStorage.setItem("businesstype", businesstype);
    router.push("/BIA_Home");
  };

  const sendBusinessTypetoRA = async () => {
    localStorage.setItem("businesstype", businesstype);
    router.push("/RA_Home");
  };

  return (
    <div>
      <MainMenu />
      <>
        <div class="bg-gray-50 pt-40">
          <div class="max-w-7xl ml-24 mr-48 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block text-blue-600">
                Choose your desired function.
              </span>
            </h2>
            <div class="relative flex items-center justify-center mt-8 flex mx-0 lg:mt-0 lg:flex-shrink-0">
              <label
                for="businesstype"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Choose a business you want to own
              </label>

              <select
                value={businesstype}
                onChange={(e) => setBusinessType(e.target.value)}
                id="businesstype"
                name="businesstype"
                required
                className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {" "}
                <option value="">-- Please choose an option --</option>
                <option value="pizza">Pizza Restaurant</option>
              </select>
            </div>
          </div>
        </div>
        <dl class="mt-24 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative mx-12 text-center">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12"></div>
              <p class=" text-lg leading-6 font-medium text-gray-900">
                Business Impact Analysis
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Determine and evaluate the potential effects of an interruption to
              critical business operations as a result of a disaster, accident
              or emergency.
            </dd>
            <a
              onClick={sendBusinessTypetoBIA}
              class="small flex items-center justify-center mx-24 mt-12 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>

          <div class="relative mx-12 text-center">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12"></div>
              <p class="text-lg leading-6 font-medium text-gray-900">
                Risk Assessment
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Identify hazards and risk factors that have the potential to cause
              harm. Analyze and evaluate the risk associated with that hazard
              and summarized into a risk matrix.
            </dd>
            <a
              onClick={sendBusinessTypetoRA}
              class="small flex items-center justify-center mx-24 mt-12 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </dl>
      </>
    </div>
  );
};

export default functions_individual;
