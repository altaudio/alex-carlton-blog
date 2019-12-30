import React from "react";
import { PageHeader } from "composed/PageHeader/PageHeader";
import { BlogPostList } from "composed/BlogPostList/BlogPostList";
import { Main } from "core/Main";

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

export default Blog;
