import React from "react";
import { HeroWrapper, HeadingWrapper, SubHeading, Heading } from "./style";
import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";

export const Hero = ({ heading, subHeading, backgroundImage }) => {
  //console.log(backgroundImage);
  const pluginImg = getImage(backgroundImage);

  return (
    <HeroWrapper>
      <BgImage image={pluginImg}>
        <HeadingWrapper>
          <div>
            <Heading>{heading}</Heading>
            <SubHeading>{subHeading}</SubHeading>
          </div>
        </HeadingWrapper>
      </BgImage>
    </HeroWrapper>
  );
};
