import { string, objectOf, shape } from "prop-types";

export const postType = {
  id: string.isRequired,
  title: string.isRequired,
  description: string.isRequired
};

export const postTypeShape = shape(postType);

export const postsType = objectOf(postTypeShape);
