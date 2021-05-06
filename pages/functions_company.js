import React, { useState, useEffect } from "react";
import { MainMenu } from "../components/MainMenu";

const functions_company = () => {
  return (
    <div>
      <MainMenu />
      <>
        <div class="bg-gray-50 pt-40">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block text-blue-600">
                Choose your desired function.
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  view business model canvas
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  view functional areas
                </a>
              </div>
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
              href="#"
              class="small flex items-center justify-center mx-24 mt-12 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>

          <div class="relative mx-12 text-center">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12"></div>
              <p class=" text-lg leading-6 font-medium text-gray-900">
                Risk Assessment
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Identify hazards and risk factors that have the potential to cause
              harm. Analyze and evaluate the risk associated with that hazard
              and summarized into a risk matrix.
            </dd>
            <a
              href="#"
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

export default functions_company;
