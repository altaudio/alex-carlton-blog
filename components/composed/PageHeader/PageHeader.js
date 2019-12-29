import React from "react";
import { string } from "prop-types";
import { Header } from "core/Header";
import { H1 } from "core/Headers/HeaderOne";
import { Navigation } from "./Navigation";

const PageHeader = ({ title }) => {
  return (
    <Header>
      <H1>{title}</H1>
      <Navigation />
    </Header>
  );
};

PageHeader.propTypes = {
  title: string
};

PageHeader.defaultProps = {
  title: "My blog, bitches."
};

export { PageHeader };
