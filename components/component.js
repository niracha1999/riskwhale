import ReactToPrint from "react-to-print";

import { MainMenu } from "../components/MainMenu";

import React, { useState, useEffect, useRef, Component } from "react";
import { SaveIcon } from "@heroicons/react/solid";
import axios from "axios";
// ES2015 module syntax
//import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

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

class ComponentToPrint extends React.Component {
  state = { box: [] };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("moutning");
    axios
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
        this.setState({ box: response.data.box });
        console.log(this.state.box);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
                  <label class="text-gray-400 font-medium pl-5">
                    low impact
                  </label>
                  <label className="text-gray-400 font-medium pl-12">
                    medium impact
                  </label>
                  <label className="text-gray-400 font-medium pl-14">
                    high impact
                  </label>
                </div>
              </div>
              <div class="relative ml-72">
                <table>
                  {[0, 1, 2].map((value) => (
                    <tr>
                      {[1, 2, 3].map((value2) => {
                        const number = 3 * value + value2;
                        const row = this.state.box.filter(
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
            </div>
            <div>
              <img
                className="relative ml-48 w-2/6"
                src="./assets/color.png"
                alt=""
              />
            </div>
          </div>
        </>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <div className="rounded-md mx-96 my-14">
              <button
                a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                <span className="pr-4 left-0 inset-y-0 flex items-center">
                  <SaveIcon
                    className="h-6 w-6 text-blue-100 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Save as PDF
              </button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Example;
