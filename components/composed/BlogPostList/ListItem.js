import React from "react";
import { LI } from "core/Lists";
import { H2 } from "core/Headers/HeaderTwo";
import { Paragraph } from "core/Paragraph";
import Link from "next/link";
import { blogPostType } from "blogPosts/propTypes/blogPosts";

const ListItem = ({ id, title, description }) => {
  return (
    <LI>
      <Link href={`/post/${id}`}>
        <a>
          <H2>{title}</H2>
          <Paragraph>{description}</Paragraph>
        </a>
      </Link>
    </LI>
  );
};

ListItem.propTypes = blogPostType;

export { ListItem };
