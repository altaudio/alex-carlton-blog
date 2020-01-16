import React from "react";
import { useRouter } from "next/router";
import { Main } from "core/Main";
import { PageHeader } from "composed/PageHeader";
import { posts } from "posts";
import { PostWrapper } from "./PostWrapper";

const Post = () => {
  const {
    query: { id }
  } = useRouter();
  const blogPost = posts[id];

  return (
    <>
      <PageHeader />
      <Main>
        {blogPost ? (
          <PostWrapper title={blogPost.title} subtitle={blogPost.subtitle}>
            <blogPost.Component />
          </PostWrapper>
        ) : null}
      </Main>
    </>
  );
};

export { Post };
