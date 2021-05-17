import { MainMenu } from "../components/MainMenu";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { TrashIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const RA_tab = () => {
  const router = useRouter();

  const [openTab, setOpenTab] = React.useState(0);
  const [keypartners, setKeypartners] = useState("");
  const [keyactivities, setKeyactivities] = useState("");
  const [keyresources, setKeyresources] = useState("");
  const [valueproposition, setValueproposition] = useState("");
  const [customerrelationships, setCustomerrelationships] = useState("");
  const [channels, setChannels] = useState("");
  const [customersegments, setCustomersegments] = useState("");
  const [coststructure, setCoststructure] = useState("");
  const [revenuestream, setRevenuestream] = useState("");

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
    await axios
      .get(
        "http://api-riskwhale.herokuapp.com/userinfo/ind/" +
          localStorage.user +
          "?business=" +
          localStorage.businesstype,

        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(localStorage.businesstype);
        console.log(response.data.businessmodel.keypartners);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCompDetails = async () => {
    await axios
      .get(
        "http://api-riskwhale.herokuapp.com/userinfo/company/" +
          localStorage.user,
        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.businessmodel.keypartners);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [keypartners_inputFields, keypartners_setInputFields] = React.useState([
    {
      id: uuidv4(),
      model: "keypartners",
      typeofrisk: "",
      risk: "",
      financialrisk: "2",
      healthrisk: "2",
      naturalrisk: "2",
      socialrisk: "2",
      governmentrisk: "2",
      legalrisk: "2",
      likelihood: "",
    },
  ]);

  const addRisk = () => {
    keypartners_setInputFields([
      ...keypartners_inputFields,
      {
        id: uuidv4(),
        model: "keypartners",
        typeofrisk: "",
        risk: "",
        financialrisk: "2",
        healthrisk: "2",
        naturalrisk: "2",
        socialrisk: "2",
        governmentrisk: "2",
        legalrisk: "2",
        likelihood: "",
      },
    ]);
  };

  const onChange = (id, event) => {
    const keypartners_newInputFields = keypartners_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    keypartners_setInputFields(keypartners_newInputFields);
  };

  const removeField = (id) => {
    const values = [...keypartners_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    keypartners_setInputFields(values);
  };

  const [keyactivities_inputFields, keyactivities_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "keyactivities",
        keyactivities_typeofrisk: "",
        keyactivities_risk: "",
        keyactivities_financialrisk: "2",
        keyactivities_healthrisk: "2",
        keyactivities_naturalrisk: "2",
        keyactivities_socialrisk: "2",
        keyactivities_governmentrisk: "2",
        keyactivities_legalrisk: "2",
        keyactivities_likelihood: "",
      },
    ]);

  const keyactivities_addRisk = () => {
    keyactivities_setInputFields([
      ...keyactivities_inputFields,
      {
        id: uuidv4(),
        model: "keyactivities",
        keyactivities_typeofrisk: "",
        keyactivities_risk: "",
        keyactivities_financialrisk: "2",
        keyactivities_healthrisk: "2",
        keyactivities_naturalrisk: "2",
        keyactivities_socialrisk: "2",
        keyactivities_governmentrisk: "2",
        keyactivities_legalrisk: "2",
        keyactivities_likelihood: "",
      },
    ]);
  };

  const keyactivities_onChange = (id, event) => {
    const keyactivities_newInputFields = keyactivities_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    keyactivities_setInputFields(keyactivities_newInputFields);
  };

  const keyactivities_removeField = (id) => {
    const values = [...keyactivities_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    keyactivities_setInputFields(values);
  };

  const [keyresources_inputFields, keyresources_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "keyresources",
        keyresources_typeofrisk: "",
        keyresources_risk: "",
        keyresources_financialrisk: "2",
        keyresources_healthrisk: "2",
        keyresources_naturalrisk: "2",
        keyresources_socialrisk: "2",
        keyresources_governmentrisk: "2",
        keyresources_legalrisk: "2",
        keyresources_likelihood: "",
      },
    ]);

  const keyresources_addRisk = () => {
    keyresources_setInputFields([
      ...keyresources_inputFields,
      {
        id: uuidv4(),
        model: "keyresources",
        keyresources_typeofrisk: "",
        keyresources_risk: "",
        keyresources_financialrisk: "2",
        keyresources_healthrisk: "2",
        keyresources_naturalrisk: "2",
        keyresources_socialrisk: "2",
        keyresources_governmentrisk: "2",
        keyresources_legalrisk: "2",
        keyresources_likelihood: "",
      },
    ]);
  };

  const keyresources_onChange = (id, event) => {
    const keyresources_newInputFields = keyresources_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    keyresources_setInputFields(keyresources_newInputFields);
  };

  const keyresources_removeField = (id) => {
    const values = [...keyresources_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    keyresources_setInputFields(values);
  };

  const [valueproposition_inputFields, valueproposition_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "valueproposition",
        valueproposition_typeofrisk: "",
        valueproposition_risk: "",
        valueproposition_financialrisk: "2",
        valueproposition_healthrisk: "2",
        valueproposition_naturalrisk: "2",
        valueproposition_socialrisk: "2",
        valueproposition_governmentrisk: "2",
        valueproposition_legalrisk: "2",
        valueproposition_likelihood: "",
      },
    ]);

  const valueproposition_addRisk = () => {
    valueproposition_setInputFields([
      ...valueproposition_inputFields,
      {
        id: uuidv4(),
        model: "valueproposition",
        valueproposition_typeofrisk: "",
        valueproposition_risk: "",
        valueproposition_financialrisk: "2",
        valueproposition_healthrisk: "2",
        valueproposition_naturalrisk: "2",
        valueproposition_socialrisk: "2",
        valueproposition_governmentrisk: "2",
        valueproposition_legalrisk: "2",
        valueproposition_likelihood: "",
      },
    ]);
  };

  const valueproposition_onChange = (id, event) => {
    const valueproposition_newInputFields = valueproposition_inputFields.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );

    valueproposition_setInputFields(valueproposition_newInputFields);
  };

  const valueproposition_removeField = (id) => {
    const values = [...valueproposition_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    valueproposition_setInputFields(values);
  };

  const [
    customerrelationships_inputFields,
    customerrelationships_setInputFields,
  ] = React.useState([
    {
      id: uuidv4(),
      model: "customerrelationships",
      customerrelationships_typeofrisk: "",
      customerrelationships_risk: "",
      customerrelationships_financialrisk: "2",
      customerrelationships_healthrisk: "2",
      customerrelationships_naturalrisk: "2",
      customerrelationships_socialrisk: "2",
      customerrelationships_governmentrisk: "2",
      customerrelationships_legalrisk: "2",
      customerrelationships_likelihood: "",
    },
  ]);

  const customerrelationships_addRisk = () => {
    customerrelationships_setInputFields([
      ...customerrelationships_inputFields,
      {
        id: uuidv4(),
        model: "customerrelationships",
        customerrelationships_typeofrisk: "",
        customerrelationships_risk: "",
        customerrelationships_financialrisk: "2",
        customerrelationships_healthrisk: "2",
        customerrelationships_naturalrisk: "2",
        customerrelationships_socialrisk: "2",
        customerrelationships_governmentrisk: "2",
        customerrelationships_legalrisk: "2",
        customerrelationships_likelihood: "",
      },
    ]);
  };

  const customerrelationships_onChange = (id, event) => {
    const customerrelationships_newInputFields =
      customerrelationships_inputFields.map((i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      });

    customerrelationships_setInputFields(customerrelationships_newInputFields);
  };

  const customerrelationships_removeField = (id) => {
    const values = [...customerrelationships_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    customerrelationships_setInputFields(values);
  };

  const [channels_inputFields, channels_setInputFields] = React.useState([
    {
      id: uuidv4(),
      model: "channels",
      channels_typeofrisk: "",
      channels_risk: "",
      channels_financialrisk: "2",
      channels_healthrisk: "2",
      channels_naturalrisk: "2",
      channels_socialrisk: "2",
      channels_governmentrisk: "2",
      channels_legalrisk: "2",
      channels_likelihood: "",
    },
  ]);

  const channels_addRisk = () => {
    channels_setInputFields([
      ...channels_inputFields,
      {
        id: uuidv4(),
        model: "channels",
        channels_typeofrisk: "",
        channels_risk: "",
        channels_financialrisk: "2",
        channels_healthrisk: "2",
        channels_naturalrisk: "2",
        channels_socialrisk: "2",
        channels_governmentrisk: "2",
        channels_legalrisk: "2",
        channels_likelihood: "",
      },
    ]);
  };

  const channels_onChange = (id, event) => {
    const channels_newInputFields = channels_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    channels_setInputFields(channels_newInputFields);
  };

  const channels_removeField = (id) => {
    const values = [...channels_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    channels_setInputFields(values);
  };

  const [customersegments_inputFields, customersegments_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "customersegments",
        customersegments_typeofrisk: "",
        customersegments_risk: "",
        customersegments_financialrisk: "2",
        customersegments_healthrisk: "2",
        customersegments_naturalrisk: "2",
        customersegments_socialrisk: "2",
        customersegments_governmentrisk: "2",
        customersegments_legalrisk: "2",
        customersegments_likelihood: "",
      },
    ]);

  const customersegments_addRisk = () => {
    customersegments_setInputFields([
      ...customersegments_inputFields,
      {
        id: uuidv4(),
        model: "customersegments",
        customersegments_typeofrisk: "",
        customersegments_risk: "",
        customersegments_financialrisk: "2",
        customersegments_healthrisk: "2",
        customersegments_naturalrisk: "2",
        customersegments_socialrisk: "2",
        customersegments_governmentrisk: "2",
        customersegments_legalrisk: "2",
        customersegments_likelihood: "",
      },
    ]);
  };

  const customersegments_onChange = (id, event) => {
    const customersegments_newInputFields = customersegments_inputFields.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );

    customersegments_setInputFields(customersegments_newInputFields);
  };

  const customersegments_removeField = (id) => {
    const values = [...customersegments_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    customersegments_setInputFields(values);
  };

  const [coststructure_inputFields, coststructure_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "coststructure",
        coststructure_typeofrisk: "",
        coststructure_risk: "",
        coststructure_financialrisk: "2",
        coststructure_healthrisk: "2",
        coststructure_naturalrisk: "2",
        coststructure_socialrisk: "2",
        coststructure_governmentrisk: "2",
        coststructure_legalrisk: "2",
        coststructure_likelihood: "",
      },
    ]);

  const coststructure_addRisk = () => {
    coststructure_setInputFields([
      ...coststructure_inputFields,
      {
        id: uuidv4(),
        model: "coststructure",
        coststructure_typeofrisk: "",
        coststructure_risk: "",
        coststructure_financialrisk: "2",
        coststructure_healthrisk: "2",
        coststructure_naturalrisk: "2",
        coststructure_socialrisk: "2",
        coststructure_governmentrisk: "2",
        coststructure_legalrisk: "2",
        coststructure_likelihood: "",
      },
    ]);
  };

  const coststructure_onChange = (id, event) => {
    const coststructure_newInputFields = coststructure_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    coststructure_setInputFields(coststructure_newInputFields);
  };

  const coststructure_removeField = (id) => {
    const values = [...coststructure_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    coststructure_setInputFields(values);
  };

  const [revenuestreams_inputFields, revenuestreams_setInputFields] =
    React.useState([
      {
        id: uuidv4(),
        model: "revenuestreams",
        revenuestreams_typeofrisk: "",
        revenuestreams_risk: "",
        revenuestreams_financialrisk: "2",
        revenuestreams_healthrisk: "2",
        revenuestreams_naturalrisk: "2",
        revenuestreams_socialrisk: "2",
        revenuestreams_governmentrisk: "2",
        revenuestreams_legalrisk: "2",
        revenuestreams_likelihood: "",
      },
    ]);

  const revenuestreams_addRisk = () => {
    revenuestreams_setInputFields([
      ...revenuestreams_inputFields,
      {
        id: uuidv4(),
        model: "revenuestreams",
        revenuestreams_typeofrisk: "",
        revenuestreams_risk: "",
        revenuestreams_financialrisk: "2",
        revenuestreams_healthrisk: "2",
        revenuestreams_naturalrisk: "2",
        revenuestreams_socialrisk: "2",
        revenuestreams_governmentrisk: "2",
        revenuestreams_legalrisk: "2",
        revenuestreams_likelihood: "",
      },
    ]);
  };

  const revenuestreams_onChange = (id, event) => {
    const revenuestreams_newInputFields = revenuestreams_inputFields.map(
      (i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      }
    );

    revenuestreams_setInputFields(revenuestreams_newInputFields);
  };

  const revenuestreams_removeField = (id) => {
    const values = [...revenuestreams_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    revenuestreams_setInputFields(values);
  };

  const postKeyPartners = keypartners_inputFields.map(
    ({
      typeofrisk: typeofrisks,
      risk: risk,
      financialrisk: financial,
      healthrisk: healthandsafety,
      naturalrisk: naturalenv,
      socialrisk: socialheritage,
      governmentrisk: government,
      legalrisk: legal,
      likelihood: likelihood,
    }) => ({
      model: "key partners",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postKeyActivities = keyactivities_inputFields.map(
    ({
      keyactivities_typeofrisk: typeofrisks,
      keyactivities_risk: risk,
      keyactivities_financialrisk: financial,
      keyactivities_healthrisk: healthandsafety,
      keyactivities_naturalrisk: naturalenv,
      keyactivities_socialrisk: socialheritage,
      keyactivities_governmentrisk: government,
      keyactivities_legalrisk: legal,
      keyactivities_likelihood: likelihood,
    }) => ({
      model: "key activities",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postKeyResources = keyresources_inputFields.map(
    ({
      keyresources_typeofrisk: typeofrisks,
      keyresources_risk: risk,
      keyresources_financialrisk: financial,
      keyresources_healthrisk: healthandsafety,
      keyresources_naturalrisk: naturalenv,
      keyresources_socialrisk: socialheritage,
      keyresources_governmentrisk: government,
      keyresources_legalrisk: legal,
      keyresources_likelihood: likelihood,
    }) => ({
      model: "key resources",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postValueProposition = valueproposition_inputFields.map(
    ({
      valueproposition_typeofrisk: typeofrisks,
      valueproposition_risk: risk,
      valueproposition_financialrisk: financial,
      valueproposition_healthrisk: healthandsafety,
      valueproposition_naturalrisk: naturalenv,
      valueproposition_socialrisk: socialheritage,
      valueproposition_governmentrisk: government,
      valueproposition_legalrisk: legal,
      valueproposition_likelihood: likelihood,
    }) => ({
      model: "valueproposition",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postCusRela = customerrelationships_inputFields.map(
    ({
      customerrelationships_typeofrisk: typeofrisks,
      customerrelationships_risk: risk,
      customerrelationships_financialrisk: financial,
      customerrelationships_healthrisk: healthandsafety,
      customerrelationships_naturalrisk: naturalenv,
      customerrelationships_socialrisk: socialheritage,
      customerrelationships_governmentrisk: government,
      customerrelationships_legalrisk: legal,
      customerrelationships_likelihood: likelihood,
    }) => ({
      model: "customer relationships",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postChannels = channels_inputFields.map(
    ({
      channels_typeofrisk: typeofrisks,
      channels_risk: risk,
      channels_financialrisk: financial,
      channels_healthrisk: healthandsafety,
      channels_naturalrisk: naturalenv,
      channels_socialrisk: socialheritage,
      channels_governmentrisk: government,
      channels_legalrisk: legal,
      channels_likelihood: likelihood,
    }) => ({
      model: "channels",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postCustSegments = customersegments_inputFields.map(
    ({
      customersegments_typeofrisk: typeofrisks,
      customersegments_risk: risk,
      customersegments_financialrisk: financial,
      customersegments_healthrisk: healthandsafety,
      customersegments_naturalrisk: naturalenv,
      customersegments_socialrisk: socialheritage,
      customersegments_governmentrisk: government,
      customersegments_legalrisk: legal,
      customersegments_likelihood: likelihood,
    }) => ({
      model: "customer segments",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postCostStructure = coststructure_inputFields.map(
    ({
      coststructure_typeofrisk: typeofrisks,
      coststructure_risk: risk,
      coststructure_financialrisk: financial,
      coststructure_healthrisk: healthandsafety,
      coststructure_naturalrisk: naturalenv,
      coststructure_socialrisk: socialheritage,
      coststructure_governmentrisk: government,
      coststructure_legalrisk: legal,
      coststructure_likelihood: likelihood,
    }) => ({
      model: "cost structure",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postRevenueStream = revenuestreams_inputFields.map(
    ({
      revenuestreams_typeofrisk: typeofrisks,
      revenuestreams_risk: risk,
      revenuestreams_financialrisk: financial,
      revenuestreams_healthrisk: healthandsafety,
      revenuestreams_naturalrisk: naturalenv,
      revenuestreams_socialrisk: socialheritage,
      revenuestreams_governmentrisk: government,
      revenuestreams_legalrisk: legal,
      revenuestreams_likelihood: likelihood,
    }) => ({
      model: "revenue streams",
      typeofrisks,
      risk,
      impacts: {
        financial,
        healthandsafety,
        naturalenv,
        socialheritage,
        government,
        legal,
      },
      likelihood,
    })
  );

  const postDetails = async () => {
    Array.prototype.push.apply(postKeyPartners, postKeyActivities);
    Array.prototype.push.apply(postKeyPartners, postKeyResources);
    Array.prototype.push.apply(postKeyPartners, postKeyResources);
    Array.prototype.push.apply(postKeyPartners, postValueProposition);
    Array.prototype.push.apply(postKeyPartners, postCusRela);
    Array.prototype.push.apply(postKeyPartners, postChannels);
    Array.prototype.push.apply(postKeyPartners, postCustSegments);
    Array.prototype.push.apply(postKeyPartners, postCostStructure);
    Array.prototype.push.apply(postKeyPartners, postRevenueStream);
    console.log(postKeyPartners);
    console.log("posting");

    await axios
      .post(
        "http://api-riskwhale.herokuapp.com/ra/" + localStorage.user,

        {
          id_company: localStorage.user,
          box: postKeyPartners,
        },

        {
          headers: {
            "auth-token": localStorage.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        router.push("/riskmatrix");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <MainMenu />
      <>
        <div className="pt-20">
          <div class="flex-1 flex block">
            <nav class="fixed bg-blue-600 w-64 h-screen">
              <div class="mt-10 mb-4">
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
                    <span class="ml-2">Key Partners</span>
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
                    <span class="ml-2">Key Activities</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 3 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                  >
                    <span class="ml-2">Key Resources</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 4 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href="#link4"
                  >
                    <span class="ml-2">Value Propositions</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 5 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    data-toggle="tab"
                    href="#link5"
                  >
                    <span class="ml-2">Customer Relationships</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 6 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(6);
                    }}
                    data-toggle="tab"
                    href="#link6"
                  >
                    <span class="ml-2">Channels</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 7 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(7);
                    }}
                    data-toggle="tab"
                    href="#link7"
                  >
                    <span class="ml-2">Customer Segments</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 8 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(8);
                    }}
                    data-toggle="tab"
                    href="#link8"
                  >
                    <span class="ml-2">Cost Structure</span>
                  </a>
                </li>
                <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
                  <a
                    className={
                      openTab === 9 ? "text-cream font-bold" : "text-blue-100"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(9);
                    }}
                    data-toggle="tab"
                    href="#link9"
                  >
                    <span class="ml-2">Revenue Streams</span>
                  </a>
                </li>
                <div className="relative justify-center ml-16">
                  <button
                    onClick={postDetails}
                    className="justify-self-center mt-4 text-sm py-2 px-8 border border-white shadow-sm text-sm font-medium rounded-md text-white bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </nav>

            <div className="pb-4 py-5">
              <div class="ml-64 py-2 flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Key Partners
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {keypartners}
                        </p>
                      </div>
                    </div>
                    {keypartners_inputFields.map((keypartners_inputField) => (
                      <div
                        key={keypartners_inputField.id}
                        className="md:mt-0 md:col-span-2"
                      >
                        <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="py-5 bg-white space-y-6 sm:p-6">
                            <div className="w-full grid grid-cols-3 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="typeofrisk"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Type of Risk
                                </label>
                                <select
                                  id="typeofrisk"
                                  name="typeofrisk"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.typeofrisk}
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="strategyrisk">
                                    Strategy Risk
                                  </option>
                                  <option value="operationalrisk">
                                    Operational Risk
                                  </option>
                                  <option value="financialrisk">
                                    Financial Risk
                                  </option>
                                  <option value="compliancerisk">
                                    Compliance Risk
                                  </option>
                                </select>
                              </div>
                              <div className="col-span-3 sm:col-span-2">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Risk
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <textarea
                                    onChange={(event) =>
                                      onChange(keypartners_inputField.id, event)
                                    }
                                    value={keypartners_inputField.risk}
                                    type="text"
                                    name="risk"
                                    id="risk"
                                    autoComplete="risk"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder=" identify a risk"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block pb-2 text-sm font-medium text-blue-800"
                              >
                                Impacts
                              </label>

                              <div className="rounded-md shadow-sm pb-2">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Financial
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="financialrisk"
                                  name="financialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  value="1"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.financialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Health and safety
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="healthrisk"
                                  name="healthrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.healthrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Natural environment
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  id="naturalrisk"
                                  name="naturalrisk"
                                  type="range"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.naturalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Social / Cultutal Heritage
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="socialrisk"
                                  name="socialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.socialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Government / Reputation
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="governmentrisk"
                                  name="governmentrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.governmentrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Legal
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="legalrisk"
                                  name="legalrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.legalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label
                                htmlFor="likelihood"
                                className="block text-sm font-medium text-blue-800"
                              >
                                Likelihood
                              </label>
                              <div>
                                <select
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.likelihood}
                                  id="likelihood"
                                  name="likelihood"
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="1">Unlikely to occur</option>
                                  <option value="2">Possible to occur</option>
                                  <option value="3">Likely to occur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <button
                            disabled={keypartners_inputFields.length === 1}
                            onClick={() =>
                              removeField(keypartners_inputField.id)
                            }
                            className="relative ml-80"
                          >
                            <TrashIcon
                              className="h-5 w-5 text-red-500 group-hover:text-red-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="relative justify-center ml-96">
                          <button
                            onClick={addRisk}
                            className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            add more risk
                          </button>
                        </div>
                      </div>
                    ))}
                  </span>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Key Activities
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {keyactivities}
                        </p>
                      </div>
                    </div>
                    {keyactivities_inputFields.map(
                      (keyactivities_inputField) => (
                        <div
                          key={keyactivities_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="keyactivities_typeofrisk"
                                    name="keyactivities_typeofrisk"
                                    autoComplete="keyactivities_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.typeofrisk}
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        keyactivities_onChange(
                                          keyactivities_inputField.id,
                                          event
                                        )
                                      }
                                      value={keyactivities_inputField.risk}
                                      type="text"
                                      name="keyactivities_risk"
                                      id="keyactivities_risk"
                                      autoComplete="keyactivities_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="keyactivities_financialrisk"
                                    name="keyactivities_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      keyactivities_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="keyactivities_healthrisk"
                                    name="keyactivities_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.healthrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="keyactivities_naturalrisk"
                                    name="keyactivities_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.naturalrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="keyactivities_socialrisk"
                                    name="keyactivities_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.socialrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="keyactivities_governmentrisk"
                                    name="keyactivities_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      keyactivities_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="keyactivities_legalrisk"
                                    name="keyactivities_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.legalrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      keyactivities_onChange(
                                        keyactivities_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyactivities_inputField.likelihood}
                                    id="keyactivities_likelihood"
                                    name="keyactivities_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={keyactivities_inputFields.length === 1}
                              onClick={() =>
                                keyactivities_removeField(
                                  keyactivities_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={keyactivities_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Key Resources
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {keyresources}
                        </p>
                      </div>
                    </div>
                    {keyresources_inputFields.map((keyresources_inputField) => (
                      <div
                        key={keyresources_inputField.id}
                        className="md:mt-0 md:col-span-2"
                      >
                        <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="py-5 bg-white space-y-6 sm:p-6">
                            <div className="w-full grid grid-cols-3 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="typeofrisk"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Type of Risk
                                </label>
                                <select
                                  id="keyresources_typeofrisk"
                                  name="keyresources_typeofrisk"
                                  autoComplete="keyresources_typeofrisk"
                                  placeholder="choose one"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.typeofrisk}
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="strategyrisk">
                                    Strategy Risk
                                  </option>
                                  <option value="operationalrisk">
                                    Operational Risk
                                  </option>
                                  <option value="financialrisk">
                                    Financial Risk
                                  </option>
                                  <option value="compliancerisk">
                                    Compliance Risk
                                  </option>
                                </select>
                              </div>
                              <div className="col-span-3 sm:col-span-2">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Risk
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <textarea
                                    onChange={(event) =>
                                      keyresources_onChange(
                                        keyresources_inputField.id,
                                        event
                                      )
                                    }
                                    value={keyresources_inputField.risk}
                                    type="text"
                                    name="keyresources_risk"
                                    id="keyresources_risk"
                                    autoComplete="keyresources_risk"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder=" identify a risk"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block pb-2 text-sm font-medium text-blue-800"
                              >
                                Impacts
                              </label>

                              <div className="rounded-md shadow-sm pb-2">
                                <label
                                  htmlFor="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Financial
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="keyresources_financialrisk"
                                  name="keyresources_financialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.financialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Health and safety
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="keyresources_healthrisk"
                                  name="keyresources_healthrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.healthrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Natural environment
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  id="keyresources_naturalrisk"
                                  name="keyresources_naturalrisk"
                                  type="range"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.naturalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Social / Cultutal Heritage
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="keyresources_socialrisk"
                                  name="keyresources_socialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.socialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Government / Reputation
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="keyresources_governmentrisk"
                                  name="keyresources_governmentrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.governmentrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Legal
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="keyresources_legalrisk"
                                  name="keyresources_legalrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.legalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label className="block text-sm font-medium text-blue-800">
                                Likelihood
                              </label>
                              <div>
                                <select
                                  onChange={(event) =>
                                    keyresources_onChange(
                                      keyresources_inputField.id,
                                      event
                                    )
                                  }
                                  value={keyresources_inputField.likelihood}
                                  id="keyresources_likelihood"
                                  name="keyresources_likelihood"
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="1">Unlikely to occur</option>
                                  <option value="2">Possible to occur</option>
                                  <option value="3">Likely to occur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <button
                            disabled={keyresources_inputFields.length === 1}
                            onClick={() =>
                              keyresources_removeField(
                                keyresources_inputField.id
                              )
                            }
                            className="items-self-center ml-80 relative"
                          >
                            <TrashIcon
                              className="h-5 w-5 text-red-500 group-hover:text-red-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="frelative justify-center ml-96">
                          <button
                            onClick={keyresources_addRisk}
                            className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            add more risk
                          </button>
                        </div>
                      </div>
                    ))}
                  </span>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Value Propositions
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {valueproposition}
                        </p>
                      </div>
                    </div>
                    {valueproposition_inputFields.map(
                      (valueproposition_inputField) => (
                        <div
                          key={valueproposition_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="keyresources_typeofrisk"
                                    name="keyresources_typeofrisk"
                                    autoComplete="keyresources_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.typeofrisk
                                    }
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        valueproposition_onChange(
                                          valueproposition_inputField.id,
                                          event
                                        )
                                      }
                                      value={valueproposition_inputField.risk}
                                      type="text"
                                      name="keyresources_risk"
                                      id="keyresources_risk"
                                      autoComplete="keyresources_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="valueproposition_financialrisk"
                                    name="valueproposition_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="valueproposition_healthrisk"
                                    name="valueproposition_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.healthrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="valueproposition_naturalrisk"
                                    name="valueproposition_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.naturalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="valueproposition_socialrisk"
                                    name="valueproposition_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.socialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="valueproposition_governmentrisk"
                                    name="valueproposition_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="valueproposition_legalrisk"
                                    name="valueproposition_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.legalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      valueproposition_onChange(
                                        valueproposition_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      valueproposition_inputField.likelihood
                                    }
                                    id="valueproposition_likelihood"
                                    name="valueproposition_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={
                                valueproposition_inputFields.length === 1
                              }
                              onClick={() =>
                                valueproposition_removeField(
                                  valueproposition_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={valueproposition_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Customer Relationships
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {customerrelationships}
                        </p>
                      </div>
                    </div>
                    {customerrelationships_inputFields.map(
                      (customerrelationships_inputField) => (
                        <div
                          key={customerrelationships_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="customerrelationships_typeofrisk"
                                    name="customerrelationships_typeofrisk"
                                    autoComplete="customerrelationships_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.typeofrisk
                                    }
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        customerrelationships_onChange(
                                          customerrelationships_inputField.id,
                                          event
                                        )
                                      }
                                      value={
                                        customerrelationships_inputField.risk
                                      }
                                      type="text"
                                      name="customerrelationships_risk"
                                      id="customerrelationships_risk"
                                      autoComplete="customerrelationships_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customerrelationships_financialrisk"
                                    name="customerrelationships_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customerrelationships_healthrisk"
                                    name="customerrelationships_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.healthrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="customerrelationships_naturalrisk"
                                    name="customerrelationships_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.naturalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customerrelationships_socialrisk"
                                    name="customerrelationships_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.socialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customerrelationships_governmentrisk"
                                    name="customerrelationships_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customerrelationships_legalrisk"
                                    name="customerrelationships_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.legalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      customerrelationships_onChange(
                                        customerrelationships_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customerrelationships_inputField.likelihood
                                    }
                                    id="customerrelationships_likelihood"
                                    name="customerrelationships_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={
                                customerrelationships_inputFields.length === 1
                              }
                              onClick={() =>
                                customerrelationships_removeField(
                                  customerrelationships_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={customerrelationships_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Channels
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {channels}
                        </p>
                      </div>
                    </div>
                    {channels_inputFields.map((channels_inputField) => (
                      <div
                        key={channels_inputField.id}
                        className="md:mt-0 md:col-span-2"
                      >
                        <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="py-5 bg-white space-y-6 sm:p-6">
                            <div className="w-full grid grid-cols-3 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="typeofrisk"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Type of Risk
                                </label>
                                <select
                                  id="channels_typeofrisk"
                                  name="channels_typeofrisk"
                                  autoComplete="channels_typeofrisk"
                                  placeholder="choose one"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.typeofrisk}
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="strategyrisk">
                                    Strategy Risk
                                  </option>
                                  <option value="operationalrisk">
                                    Operational Risk
                                  </option>
                                  <option value="financialrisk">
                                    Financial Risk
                                  </option>
                                  <option value="compliancerisk">
                                    Compliance Risk
                                  </option>
                                </select>
                              </div>
                              <div className="col-span-3 sm:col-span-2">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Risk
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <textarea
                                    onChange={(event) =>
                                      channels_onChange(
                                        channels_inputField.id,
                                        event
                                      )
                                    }
                                    value={channels_inputField.risk}
                                    type="text"
                                    name="channels_risk"
                                    id="channels_risk"
                                    autoComplete="channels_risk"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder=" identify a risk"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block pb-2 text-sm font-medium text-blue-800"
                              >
                                Impacts
                              </label>

                              <div className="rounded-md shadow-sm pb-2">
                                <label
                                  htmlFor="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Financial
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="channels_financialrisk"
                                  name="channels_financialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.financialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Health and safety
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="channels_healthrisk"
                                  name="channels_healthrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.healthrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Natural environment
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  id="channels_naturalrisk"
                                  name="channels_naturalrisk"
                                  type="range"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.naturalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Social / Cultutal Heritage
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="channels_socialrisk"
                                  name="channels_socialrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.socialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Government / Reputation
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="channels_governmentrisk"
                                  name="channels_governmentrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.governmentrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                  Legal
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  id="channels_legalrisk"
                                  name="channels_legalrisk"
                                  min="1"
                                  max="3"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.legalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label className="block text-sm font-medium text-blue-800">
                                Likelihood
                              </label>
                              <div>
                                <select
                                  onChange={(event) =>
                                    channels_onChange(
                                      channels_inputField.id,
                                      event
                                    )
                                  }
                                  value={channels_inputField.likelihood}
                                  id="channels_likelihood"
                                  name="channels_likelihood"
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option value="">
                                    -- Please choose an option --
                                  </option>
                                  <option value="1">Unlikely to occur</option>
                                  <option value="2">Possible to occur</option>
                                  <option value="3">Likely to occur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <button
                            disabled={channels_inputFields.length === 1}
                            onClick={() =>
                              channels_removeField(channels_inputField.id)
                            }
                            className="items-self-center ml-80 relative"
                          >
                            <TrashIcon
                              className="h-5 w-5 text-red-500 group-hover:text-red-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="relative justify-center ml-96">
                          <button
                            onClick={channels_addRisk}
                            className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            add more risk
                          </button>
                        </div>
                      </div>
                    ))}
                  </span>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Customer Segments
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {customersegments}
                        </p>
                      </div>
                    </div>
                    {customersegments_inputFields.map(
                      (customersegments_inputField) => (
                        <div
                          key={customersegments_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="customersegments_typeofrisk"
                                    name="customersegments_typeofrisk"
                                    autoComplete="customersegments_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.typeofrisk
                                    }
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        customersegments_onChange(
                                          customersegments_inputField.id,
                                          event
                                        )
                                      }
                                      value={customersegments_inputField.risk}
                                      type="text"
                                      name="customersegments_risk"
                                      id="customersegments_risk"
                                      autoComplete="customersegments_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customersegments_financialrisk"
                                    name="customersegments_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customersegments_healthrisk"
                                    name="customersegments_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.healthrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="customersegments_naturalrisk"
                                    name="customersegments_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.naturalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customersegments_socialrisk"
                                    name="customersegments_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.socialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customersegments_governmentrisk"
                                    name="customersegments_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="customersegments_legalrisk"
                                    name="customersegments_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.legalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      customersegments_onChange(
                                        customersegments_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      customersegments_inputField.likelihood
                                    }
                                    id="customersegments_likelihood"
                                    name="customersegments_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={
                                customersegments_inputFields.length === 1
                              }
                              onClick={() =>
                                customersegments_removeField(
                                  customersegments_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={customersegments_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Cost Structure
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {coststructure}
                        </p>
                      </div>
                    </div>
                    {coststructure_inputFields.map(
                      (coststructure_inputField) => (
                        <div
                          key={coststructure_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="coststructure_typeofrisk"
                                    name="coststructure_typeofrisk"
                                    autoComplete="coststructure_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.typeofrisk}
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        coststructure_onChange(
                                          coststructure_inputField.id,
                                          event
                                        )
                                      }
                                      value={coststructure_inputField.risk}
                                      type="text"
                                      name="coststructure_risk"
                                      id="coststructure_risk"
                                      autoComplete="coststructure_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="coststructure_financialrisk"
                                    name="coststructure_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      coststructure_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="coststructure_healthrisk"
                                    name="coststructure_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.healthrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="coststructure_naturalrisk"
                                    name="coststructure_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.naturalrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="coststructure_socialrisk"
                                    name="coststructure_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.socialrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="coststructure_governmentrisk"
                                    name="coststructure_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      coststructure_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="coststructure_legalrisk"
                                    name="coststructure_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.legalrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      coststructure_onChange(
                                        coststructure_inputField.id,
                                        event
                                      )
                                    }
                                    value={coststructure_inputField.likelihood}
                                    id="coststructure_likelihood"
                                    name="coststructure_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={coststructure_inputFields.length === 1}
                              onClick={() =>
                                coststructure_removeField(
                                  coststructure_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={coststructure_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Revenue Streams
                        </h3>
                        <p className="mt-1 mr-64 text-sm text-blue-800">
                          {revenuestream}
                        </p>
                      </div>
                    </div>
                    {revenuestreams_inputFields.map(
                      (revenuestreams_inputField) => (
                        <div
                          key={revenuestreams_inputField.id}
                          className="md:mt-0 md:col-span-2"
                        >
                          <div className="my-14 max-w-screen-md w-full ml-36 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="py-5 bg-white space-y-6 sm:p-6">
                              <div className="w-full grid grid-cols-3 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="typeofrisk"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Type of Risk
                                  </label>
                                  <select
                                    id="revenuestreams_typeofrisk"
                                    name="revenuestreams_typeofrisk"
                                    autoComplete="revenuestreams_typeofrisk"
                                    placeholder="choose one"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={revenuestreams_inputField.typeofrisk}
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="strategyrisk">
                                      Strategy Risk
                                    </option>
                                    <option value="operationalrisk">
                                      Operational Risk
                                    </option>
                                    <option value="financialrisk">
                                      Financial Risk
                                    </option>
                                    <option value="compliancerisk">
                                      Compliance Risk
                                    </option>
                                  </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-blue-800"
                                  >
                                    Risk
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <textarea
                                      onChange={(event) =>
                                        revenuestreams_onChange(
                                          revenuestreams_inputField.id,
                                          event
                                        )
                                      }
                                      value={revenuestreams_inputField.risk}
                                      type="text"
                                      name="revenuestreams_risk"
                                      id="revenuestreams_risk"
                                      autoComplete="revenuestreams_risk"
                                      required
                                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder=" identify a risk"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="block pb-2 text-sm font-medium text-blue-800"
                                >
                                  Impacts
                                </label>

                                <div className="rounded-md shadow-sm pb-2">
                                  <label
                                    htmlFor="financial"
                                    className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                  >
                                    Financial
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="revenuestreams_financialrisk"
                                    name="revenuestreams_financialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      revenuestreams_inputField.financialrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Health and safety
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="revenuestreams_healthrisk"
                                    name="revenuestreams_healthrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={revenuestreams_inputField.healthrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Natural environment
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    id="revenuestreams_naturalrisk"
                                    name="revenuestreams_naturalrisk"
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      revenuestreams_inputField.naturalrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Social / Cultutal Heritage
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="revenuestreams_socialrisk"
                                    name="revenuestreams_socialrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={revenuestreams_inputField.socialrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Government / Reputation
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="revenuestreams_governmentrisk"
                                    name="revenuestreams_governmentrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={
                                      revenuestreams_inputField.governmentrisk
                                    }
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                                <div className="pb-2 rounded-md shadow-sm ">
                                  <label className="pt-4 pr-6 text-sm font-medium text-blue-600">
                                    Legal
                                  </label>

                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Least Impact
                                  </label>
                                  <input
                                    type="range"
                                    id="revenuestreams_legalrisk"
                                    name="revenuestreams_legalrisk"
                                    min="1"
                                    max="3"
                                    step="1"
                                    list="steplist"
                                    className="mx-5 text-blue-400"
                                    color="blue"
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={revenuestreams_inputField.legalrisk}
                                  />
                                  <datalist
                                    id="steplist"
                                    className="text-blue-400"
                                  >
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    <option label="3">3</option>
                                  </datalist>
                                  <label className="pt-4 text-xs font-medium text-gray-400">
                                    Most Impact
                                  </label>
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label className="block text-sm font-medium text-blue-800">
                                  Likelihood
                                </label>
                                <div>
                                  <select
                                    onChange={(event) =>
                                      revenuestreams_onChange(
                                        revenuestreams_inputField.id,
                                        event
                                      )
                                    }
                                    value={revenuestreams_inputField.likelihood}
                                    id="revenuestreams_likelihood"
                                    name="revenuestreams_likelihood"
                                    className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  >
                                    <option value="">
                                      -- Please choose an option --
                                    </option>
                                    <option value="1">Unlikely to occur</option>
                                    <option value="2">Possible to occur</option>
                                    <option value="3">Likely to occur</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={revenuestreams_inputFields.length === 1}
                              onClick={() =>
                                revenuestreams_removeField(
                                  revenuestreams_inputField.id
                                )
                              }
                              className="items-self-center ml-80 relative"
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative justify-center ml-96">
                            <button
                              onClick={revenuestreams_addRisk}
                              className="justify-self-center mt-2 text-sm py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              add more risk
                            </button>
                          </div>
                        </div>
                      )
                    )}
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

export default RA_tab;
