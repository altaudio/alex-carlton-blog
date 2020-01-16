import React from "react";
import { useRouter } from "next/router";
import { Main } from "core/Main";
import { PageHeader } from "composed/PageHeader";
import { posts } from "posts";

const Post = () => {
  const {
    query: { id }
  } = useRouter();
  const blogPost = posts[id];

  return (
    <>
      <PageHeader />
      <Main>{blogPost && <blogPost.Component />}</Main>
    </>
  );
};

export { Post };
