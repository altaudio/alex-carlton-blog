import React from "react";
import { Paragraph } from "core/Paragraph";
import { PostWrapper } from "./PostWrapper";

const InformationDiet = () => {
  return (
    <PostWrapper
      title="A programmers information diet"
      subtitle="How to get more of what your brain wants."
    >
      <Paragraph>
        This is some text. It is my first ever blog post. things ar really going
        to kick off from here!
      </Paragraph>
    </PostWrapper>
  );
};

export { InformationDiet };
