import { MainMenu } from "../components/MainMenu";

import React, { useState, useEffect } from "react";
import { SaveIcon } from "@heroicons/react/solid";
import axios from "axios";

const color = [
  "orange",
  "#C0413B",
  "#C0413B",
  "#FEE12B",
  "orange",
  "#C0413B",
  "#187B30",
  "#FEE12B",
  "orange",
];

const RiskMatrix = () => {
  const [data2, setData] = useState({ box: [] });
  console.log(data2);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    await axios
      .get(
        "http://api-riskwhale.herokuapp.com/ra/" +
          localStorage.user +
          "/result",
        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <MainMenu />

      <>
        <div>
          <div className="pt-32 pb-4 pl-48">
            <h1 className="pl-64 text-lg text-3xl font-bold leading-6 text-blue-800">
              Risk Matrix
            </h1>
          </div>
          <div className="flex">
            <div
              style={{
                transform: "rotate(270deg)",
              }}
              class="mt-64 absolute"
            >
              <div>
                <label class="pl-56 text-xl text-blue-800 font-semibold">
                  Impact
                </label>
              </div>
              <div class="pl-12">
                <label class="text-gray-400 font-medium pl-5">low impact</label>
                <label className="text-gray-400 font-medium pl-12">
                  medium impact
                </label>
                <label className="text-gray-400 font-medium pl-14">
                  high impact
                </label>
              </div>
            </div>
            <div class="ml-72">
              <table>
                {[0, 1, 2].map((value) => (
                  <tr>
                    {[1, 2, 3].map((value2) => {
                      const number = 3 * value + value2;
                      const row = data2.box.filter(
                        (item) => item.value === number
                      );

                      return (
                        <td
                          className="border-2 rounded-lg border-white"
                          style={{
                            backgroundColor: color[number - 1],

                            width: 170,
                            height: 170,
                            overflow: "auto",
                          }}
                        >
                          {row.map((data) => (
                            <div className="px-4 text-black font-medium text-center">
                              {data.risk}
                            </div>
                          ))}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </table>
            </div>
            <div>
              <img
                className="pl-36 h-5/6 w-5/6"
                src="./assets/color.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex">
            <div class="pl-64 pt-8">
              <div>
                <label className="text-gray-400 font-medium pl-12">
                  unlikely to occur
                </label>
                <label className="text-gray-400 font-medium pl-9">
                  possible to occur
                </label>
                <label className="text-gray-400 font-medium pl-14">
                  likely to occur
                </label>
              </div>
              <div className="pt-2 pl-6">
                <label className="px-52 text-xl text-blue-800 font-semibold">
                  Likelihood
                </label>
              </div>
            </div>
            <div className="rounded-md ml-56">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                <span className="pr-4 left-0 inset-y-0 flex items-center">
                  <SaveIcon
                    className="h-6 w-6 text-blue-100 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Save as PDF
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default RiskMatrix;
