import React from "react";
import { chain, map } from "lodash";
import { posts } from "posts";
import { postsType } from "posts/propTypes";
import { UL } from "core/Lists";
import { ListItem } from "./ListItem";

const BlogPostList = ({ posts: blogPosts }) => {
  const sortedPosts = chain(blogPosts)
    .sortBy(post => post.publishedAt)
    .reverse()
    .value();

  return (
    <UL>
      {map(sortedPosts, ({ id, title, description }) => (
        <ListItem key={id} id={id} title={title} description={description} />
      ))}
    </UL>
  );
};

BlogPostList.defaultProps = {
  posts
};

BlogPostList.propTypes = {
  posts: postsType
};

export { BlogPostList };
