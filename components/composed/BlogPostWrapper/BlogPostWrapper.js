import React from "react";
import { string, node } from "prop-types";
import Link from "next/link";
import { Article } from "core/Article";
import { H2 } from "core/Headers/HeaderTwo";
import { H3 } from "core/Headers/HeaderThree";

const BlogPostWrapper = ({ title, subtitle, children }) => {
  return (
    <Article>
      <H2>{title}</H2>
      <H3>{subtitle}</H3>
      <Link href="/blog">
        <a>Back to blog</a>
      </Link>
      {children}
    </Article>
  );
};

BlogPostWrapper.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  children: node.isRequired
};

export { BlogPostWrapper };
