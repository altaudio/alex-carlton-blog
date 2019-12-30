import React from "react";
import { LI } from "core/Lists";
import { H2 } from "core/Headers/HeaderTwo";
import { Paragraph } from "core/Paragraph";
import { Image } from "core/image";
import Link from "next/link";
import styled from "styled-components";
import { blogPostType } from "blogPosts/propTypes/blogPosts";

const PreviewImage = styled(Image)`
  width: 500px;
`;

const ListItem = ({ id, title, description, image }) => {
  return (
    <LI>
      <Link href={`/post/${id}`}>
        <a>
          <PreviewImage src={image} />
          <H2>{title}</H2>
          <Paragraph>{description}</Paragraph>
        </a>
      </Link>
    </LI>
  );
};

ListItem.propTypes = blogPostType;

export { ListItem };
