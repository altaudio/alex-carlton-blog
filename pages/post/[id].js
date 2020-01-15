import React from "react";
import { useRouter } from "next/router";
import { Main } from "core/Main";
import { PageHeader } from "composed/PageHeader/PageHeader";
import { blogPosts } from "blogPosts/posts";

const Post = () => {
  const {
    query: { id }
  } = useRouter();
  const blogPost = blogPosts[id];

  return (
    <>
      <PageHeader />
      <Main>{blogPost && <blogPost.Component />}</Main>
    </>
  );
};

export default Post;
