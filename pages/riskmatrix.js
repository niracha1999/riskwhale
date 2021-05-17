import React from "react";
import { render } from "react-dom";
import Example from "../components/component";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/component"),
  {
    ssr: false,
  }
);

const Named = () => <DynamicComponentWithNoSSR />;
export default Named;
