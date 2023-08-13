import React from "react";
import { Breadcrumb } from "../components/sharedComponents/BreadCrumb";
import { AboutWriteup } from "../components/about/AboutWriteup";
import { ShippingArea } from "../components/about/ShippingArea";
import { Banner } from "../components/about/Banner";

const About = () => {
  return (
    <main className="main-content">
      <Breadcrumb pageName={"About us"} pagePreview={"About plantnest "} />

      <AboutWriteup />

      <ShippingArea />

      <Banner />
    </main>
  );
};

export default About;
