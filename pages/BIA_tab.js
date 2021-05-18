import React, { useState, useEffect, Component } from "react";
import { MainMenu } from "../components/MainMenu";
import axios from "axios";

import { TrashIcon, PlusCircleIcon, LoginIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const BIA_tab = ({ tab_names, tab_index }) => {
  const [objective, setObjective] = useState("");
  const [emer_objective, setEmerObjective] = useState("");
  const [activities, setActivities] = useState([
    {
      id: uuidv4(),
      activity: "",
      resources: [{ resource: "", typeofresources: "", amount: "" }],
    },
  ]);
  const onChangeActivity = (id, event) => {
    const newActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, [event.target.name]: event.target.value };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const onAddActivity = () => {
    setActivities([
      ...activities,
      {
        id: uuidv4(),
        activity: "",
        resources: [{ resource: "", typeofresources: "", amount: "" }],
      },
    ]);
  };

  const onDeleteActivity = (activityID) => {
    setActivities(activities.filter(({ id }) => id !== activityID));
  };

  const onAddResource = (activityID) => {
    const newActivities = activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          resources: [
            ...activity.resources,
            {
              id: uuidv4(),
              resource: "",
              typeofresources: "",
              amount: "",
            },
          ],
        };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const onChangeResource = (activityID, resourceID, event) => {
    const newActivities = activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          resources: activity.resources.map((resource) => {
            if (resource.id === resourceID) {
              return { ...resource, [event.target.name]: event.target.value };
            }
            return resource;
          }),
        };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const onDeleteResource = (activityID, resourceID) => {
    const newActivities = activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          resources: activity.resources.filter(({ id }) => id !== resourceID),
        };
      }
      return activity;
    });
    setActivities(newActivities);
  };

  const [emer_activities, emer_setActivities] = useState([
    {
      id: uuidv4(),
      emer_activity: "",
      emer_resources: [{ resource: "", typeofresources: "", amount: "" }],
    },
  ]);
  const emer_onChangeActivity = (id, event) => {
    const emer_newActivities = emer_activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, [event.target.name]: event.target.value };
      }
      return activity;
    });
    emer_setActivities(emer_newActivities);
  };

  const emer_onAddActivity = () => {
    emer_setActivities([
      ...emer_activities,
      {
        id: uuidv4(),
        emer_activity: "",
        emer_resources: [{ resource: "", typeofresources: "", amount: "" }],
      },
    ]);
  };

  const emer_onDeleteActivity = (activityID) => {
    emer_setActivities(emer_activities.filter(({ id }) => id !== activityID));
  };

  const emer_onAddResource = (activityID) => {
    const emer_newActivities = emer_activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          emer_resources: [
            ...activity.emer_resources,
            {
              id: uuidv4(),
              resource: "",
              typeofresources: "",
              amount: "",
            },
          ],
        };
      }
      return activity;
    });
    emer_setActivities(emer_newActivities);
  };

  const emer_onChangeResource = (activityID, resourceID, event) => {
    const emer_newActivities = emer_activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          emer_resources: activity.emer_resources.map((resource) => {
            if (resource.id === resourceID) {
              return { ...resource, [event.target.name]: event.target.value };
            }
            return resource;
          }),
        };
      }
      return activity;
    });
    emer_setActivities(emer_newActivities);
  };

  const emer_onDeleteResource = (activityID, resourceID) => {
    const emer_newActivities = emer_activities.map((activity) => {
      if (activity.id === activityID) {
        return {
          ...activity,
          emer_resources: activity.emer_resources.filter(
            ({ id }) => id !== resourceID
          ),
        };
      }
      return activity;
    });
    emer_setActivities(emer_newActivities);
  };

  const postBody = {
    situation: [
      {
        normalsituation: {
          objective: objective,
          activities: activities.map(({ activity, resources }) => ({
            activity: activity,
            resources: resources.map(
              ({
                resource: resource,
                typeofresources: typeofresources,
                amount: amount,
              }) => ({
                resource,
                typeofresources,
                amount,
              })
            ),
          })),
        },
        emergencysituation: {
          objective: emer_objective,
          activities: emer_activities.map(
            ({ emer_activity, emer_resources }) => ({
              activity: emer_activity,
              resources: emer_resources.map(
                ({
                  resource: resource,
                  typeofresources: typeofresources,
                  amount: amount,
                }) => ({
                  resource,
                  typeofresources,
                  amount,
                })
              ),
            })
          ),
        },
      },
    ],
  };
  const successToast = () =>
    toast("Submitted!", {
      toastId: 1,
    });
  const errorToast = () =>
    toast.error("Submit Error!", {
      toastId: 2,
    });

  const postDetails = async () => {
    await axios
      .post(
        "https://api-riskwhale.herokuapp.com/" +
          "bia/" +
          localStorage.user +
          "/" +
          tab_names,

        postBody,
        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        successToast();
      })
      .catch((error) => {
        console.log(error);
        errorToast();
      });
  };

  return (
    <div>
      <>
        <span>
          <div className="md:col-span-1 pl-14">
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
            <div className=" sm:px-0">
              <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                Business Operation
              </h3>
              <p className="mt-1 text-1xl font-semibold text-red-800">
                Normal Situation
              </p>
            </div>
          </div>
          <div className="relative w-full grid grid-cols-6 gap-4">
            <div className="mt-6 col-start-3 col-span-4">
              <label className="block text-sm font-medium text-blue-800">
                Objective of Operation
              </label>
              <div className="h-6 w-7/12 mt-1 flex rounded-md shadow-sm">
                <input
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  name="objective"
                  type="text"
                  required
                  className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder=" Bake 200 cakes"
                />
                <label className="block text-sm pl-2 font-medium text-blue-800">
                  per day
                </label>
              </div>
            </div>
          </div>
          {activities.map((activity) => (
            <div key={activity.id} className="flex md:mt-0 md:col-span-2">
              <div className="relative my-4 w-full mx-14 shadow sm:rounded-md sm:overflow-hidden">
                <div className="py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label className="block pb-2 text-sm font-medium text-blue-800">
                      Activity
                    </label>
                    <input
                      id="activity"
                      type="text"
                      required
                      className="w-3/5 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder=" Prepare ingredients"
                      value={activity.activity}
                      name="activity"
                      onChange={(e) => onChangeActivity(activity.id, e)}
                    />
                  </div>
                  {activity.resources.map((resource, ri) => (
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="resource"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Resource
                        </label>
                        <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                          <input
                            id="resource"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Baking Ingredients"
                            value={resource.resource}
                            name="resource"
                            onChange={(e) =>
                              onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="typeofresources"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Type of Resource
                        </label>
                        <div className="h-6 w-64 mt-1 mr-4 flex rounded-md shadow-sm ">
                          <input
                            id="typeofresources"
                            name="typeofresources"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Raw Materials"
                            value={resource.typeofresources}
                            onChange={(e) =>
                              onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Amount
                        </label>
                        <div className="h-6 w-48 mt-1 flex rounded-md shadow-sm ">
                          <input
                            id="amount"
                            name="amount"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Flour 30 bags"
                            value={resource.amount}
                            onChange={(e) =>
                              onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <button
                          onClick={() => onAddResource(activity.id)}
                          className="items-self-center relative"
                        >
                          <PlusCircleIcon
                            className="h-6 w-6 mt-7 ml-4 mr-2 text-green-600 group-hover:text-green-400"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          disabled={activity.resources.length === 1}
                          onClick={() =>
                            onDeleteResource(activity.id, resource.id)
                          }
                          className="items-self-center relative"
                        >
                          <TrashIcon
                            className="h-6 w-6 text-red-500 group-hover:text-red-400"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mb-12">
                  <button
                    onClick={() => onAddActivity()}
                    className="justify-self-center mt-2 text-sm inline-flex py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    add activity
                  </button>
                  <button
                    disabled={activities.length === 1}
                    onClick={() => onDeleteActivity(activity.id)}
                    className="justify-self-center mt-2 text-sm inline-flex py-2 mx-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    delete activity
                  </button>
                </div>
              </div>
            </div>
          ))}
        </span>
        <span>
          <div className="md:col-span-1 pl-14">
            <div className="mt-4 sm:px-0">
              <p className="mt-1 text-1xl font-semibold text-red-800">
                Emergency Situation
              </p>
            </div>
          </div>
          <div className="relative w-full grid grid-cols-6 gap-4">
            <div className="mt-6 col-start-3 col-span-4">
              <label className="block text-sm font-medium text-blue-800">
                Objective of Operation
              </label>
              <div className="h-6 w-7/12 mt-1 flex rounded-md shadow-sm">
                <input
                  value={emer_objective}
                  onChange={(e) => setEmerObjective(e.target.value)}
                  name="objective"
                  type="text"
                  required
                  className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder=" Bake 200 cakes"
                />
                <label className="block text-sm pl-2 font-medium text-blue-800">
                  per day
                </label>
              </div>
            </div>
          </div>
          {emer_activities.map((activity) => (
            <div key={activity.id} className="flex md:mt-0 md:col-span-2">
              <div className="relative my-4 w-full mx-14 shadow sm:rounded-md sm:overflow-hidden">
                <div className="py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label className="block pb-2 text-sm font-medium text-blue-800">
                      Activity
                    </label>
                    <input
                      id="activity"
                      type="text"
                      required
                      className="w-3/5 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder=" Prepare ingredients"
                      value={activity.activity}
                      name="activity"
                      onChange={(e) => emer_onChangeActivity(activity.id, e)}
                    />
                  </div>
                  {activity.emer_resources.map((resource, ri) => (
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="resource"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Resource
                        </label>
                        <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                          <input
                            id="resource"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Baking Ingredients"
                            value={resource.resource}
                            name="resource"
                            onChange={(e) =>
                              emer_onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="typeofresources"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Type of Resource
                        </label>
                        <div className="h-6 w-64 mt-1 mr-4 flex rounded-md shadow-sm ">
                          <input
                            id="typeofresources"
                            name="typeofresources"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Raw Materials"
                            value={resource.typeofresources}
                            onChange={(e) =>
                              emer_onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Amount
                        </label>
                        <div className="h-6 w-48 mt-1 flex rounded-md shadow-sm ">
                          <input
                            id="amount"
                            name="amount"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Flour 30 bags"
                            value={resource.amount}
                            onChange={(e) =>
                              emer_onChangeResource(activity.id, resource.id, e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <button
                          onClick={() => emer_onAddResource(activity.id)}
                          className="items-self-center relative"
                        >
                          <PlusCircleIcon
                            className="h-6 w-6 mt-7 ml-4 mr-2 text-green-600 group-hover:text-green-400"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          disabled={activity.emer_resources.length === 1}
                          onClick={() =>
                            emer_onDeleteResource(activity.id, resource.id)
                          }
                          className="items-self-center relative"
                        >
                          <TrashIcon
                            className="h-6 w-6 text-red-500 group-hover:text-red-400"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mb-12">
                  <button
                    onClick={() => emer_onAddActivity()}
                    className="justify-self-center mt-2 text-sm inline-flex py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    add activity
                  </button>
                  <button
                    disabled={emer_activities.length === 1}
                    onClick={() => emer_onDeleteActivity(activity.id)}
                    className="justify-self-center mt-2 text-sm inline-flex py-2 mx-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    delete activity
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8 mb-4">
            <label className="block text-sm font-medium text-blue-800">
              make sure to submit each department
            </label>
          </div>
          <div className="flex justify-center">
            <button
              onClick={postDetails}
              className="justify-self-center mt-4 text-sm py-2 px-8 border border-white shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
            >
              Submit
            </button>
          </div>
        </span>
      </>
    </div>
  );
};

export default function TabsRender() {
  const router = useRouter();

  const [openTab, setOpenTab] = React.useState(0);
  const [data, setData] = useState({ areas: [] });

  useEffect(() => {
    if (localStorage.usertype == "company") {
      console.log("company user identified");
      getCompDetails();
    } else if (localStorage.usertype == "individual") {
      console.log("individual user identified");
      getIndDetails();
    } else {
      console.log("invalid type of user");
    }
  }, []);
  const getIndDetails = async () => {
    const result = await axios.get(
      "https://api-riskwhale.herokuapp.com/userinfo/ind/" +
        localStorage.user +
        "?business=" +
        localStorage.businesstype,

      {
        headers: {
          "auth-token": localStorage.token,
        },
      }
    );

    console.log(result.data.functionaldepartments);
    setData({
      areas: result.data.functionaldepartments,
    });
  };

  const getCompDetails = async () => {
    const result = await axios.get(
      "https://api-riskwhale.herokuapp.com/userinfo/company/" +
        localStorage.user,
      {
        headers: {
          "auth-token": localStorage.token,
        },
      }
    );
    setData({
      areas: result.data.functionaldepartments,
    });
    console.log(data);
  };

  function getIndex(name) {
    return data.areas.findIndex((area) => area.name === name);
  }

  const tab_names = data.areas.map((area) => ({
    name: area.name,
  }));

  const tab_names2 = tab_names.map(({ name: name }) => ({
    name: name,
    index: getIndex(name),
  }));

  console.log(tab_names);
  console.log(tab_names2);

  const toMTPDandRTO = () => {
    router.push("/mtpd_and_rto");
  };

  return (
    <div>
      <MainMenu />
      <div className="pt-20">
        <div class="flex-1 flex block">
          <nav class="fixed bg-blue-600 w-64 h-screen">
            <div class="mt-10 mb-4">
              {tab_names2.map((tab) => (
                <li
                  key={tab.index}
                  class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg"
                >
                  <a
                    className={
                      openTab === tab.index
                        ? "text-cream font-bold"
                        : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(tab.index);
                    }}
                    data-toggle="tab"
                    href={tab.index}
                  >
                    <span class="ml-2">{tab.name}</span>
                  </a>
                </li>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={toMTPDandRTO}
                className="justify-self-center mt-4 text-sm py-2 px-8 border border-white shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
              >
                Proceed to MTPD and RTO
              </button>
            </div>
          </nav>
        </div>
      </div>
      );
      <div>
        {tab_names2.map((tab) => (
          <div class="ml-64 mt-6 flex-col">
            <div className={openTab === tab.index ? "block" : "hidden"}>
              <BIA_tab tab_names={tab.name} tab_index={tab.index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
