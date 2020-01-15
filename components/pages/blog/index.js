import React from "react";
import { PageHeader } from "composed/PageHeader/PageHeader";
import { Main } from "core/Main";
import { BlogPostList } from "./BlogPostList";

const Blog = () => {
  return (
    <>
      <PageHeader />
      <Main>
        <BlogPostList />
      </Main>
    </>
  );
};

export { Blog };
