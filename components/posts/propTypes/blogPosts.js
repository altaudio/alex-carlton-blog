import { string, objectOf, shape } from "prop-types";

export const blogPostType = {
  id: string.isRequired,
  title: string.isRequired,
  description: string.isRequired
};

export const blogPostTypeShape = shape(blogPostType);

export const blogPostsType = objectOf(blogPostTypeShape);
