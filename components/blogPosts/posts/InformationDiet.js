import React from "react";
import { Article } from "core/Article";
import { H2 } from "core/Headers/HeaderTwo";
import { H3 } from "core/Headers/HeaderThree";
import { Paragraph } from "core/Paragraph";

const InformationDiet = () => {
  return (
    <Article>
      <H2>A programmers information diet</H2>
      <H3>How to get more of what your brain wants.</H3>
      <Paragraph>
        This is some text. It is my first ever blog post. things ar really going
        to kick off from here!
      </Paragraph>
    </Article>
  );
};

export { InformationDiet };
