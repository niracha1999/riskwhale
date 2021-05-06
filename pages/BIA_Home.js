import { MainMenu } from "../components/MainMenu";
import { Popover } from "@headlessui/react";
import Head from "next/head";

const BIA_Home = () => {
  return (
    <div>
      <>
        <MainMenu />
      </>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-2">
        <div className="max-w-md w-full">
          <div>
            <img
              className="mx-auto w-full lg:h-full sm:h-72 md:h-96"
              src="./assets/bia-intro.png"
            />
          </div>
          <div>
            <a
              href="/BIA_tab"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Start
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIA_Home;
