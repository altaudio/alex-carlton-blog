import React from "react";
import { blogPostsType } from "blogPosts/propTypes/blogPosts";
import { UL } from "core/Lists";
import { blogPosts } from "blogPosts/blogPosts";
import { ListItem } from "./ListItem";

const BlogPostList = ({ posts }) => {
  return (
    <UL>
      {posts.map(({ id, title, description, image }) => (
        <ListItem
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
        />
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
