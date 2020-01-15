import React from "react";
import { chain, map } from "lodash";
import { blogPostsType } from "blogPosts/propTypes/blogPosts";
import { UL } from "core/Lists";
import { blogPosts } from "blogPosts/blogPosts";
import { ListItem } from "./ListItem";

const BlogPostList = ({ posts }) => {
  const sortedPosts = chain(posts)
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
  posts: blogPosts
};

BlogPostList.propTypes = {
  posts: blogPostsType
};

export { BlogPostList };
