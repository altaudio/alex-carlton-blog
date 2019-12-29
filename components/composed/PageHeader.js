import React from "react";
import { string } from "prop-types";
import { Header } from "core/Header";
import { H1 } from "core/HOne";

const PageHeader = ({ title }) => {
  return (
    <Header>
      <H1>{title}</H1>
    </Header>
  );
};

PageHeader.propTypes = {
  title: string.isRequired
};

export { PageHeader };
