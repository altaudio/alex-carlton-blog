import React from "react";
import { string } from "prop-types";
import { Header } from "core/Header";
// import { H1 } from "core/H1";

const PageHeader = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
};

PageHeader.propTypes = {
  title: string.isRequired
};

export { PageHeader };
