import React from "react";
import { BlogPostWrapper } from "composed/BlogPostWrapper/BlogPostWrapper";
import { Paragraph } from "core/Paragraph";

const InformationDiet = () => {
  return (
    <BlogPostWrapper
      title="A programmers information diet"
      subtitle="How to get more of what your brain wants."
    >
      <Paragraph>
        This is some text. It is my first ever blog post. things ar really going
        to kick off from here!
      </Paragraph>
    </BlogPostWrapper>
  );
};

export { InformationDiet };
