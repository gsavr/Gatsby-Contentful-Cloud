import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Hero, PriceGroup } from "components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Wrapper, ImageWrapper } from "./style";

export const RichText = ({ raw, references = [] }) => {
  //map out references
  const referencesMap = {};
  references.forEach((reference) => {
    referencesMap[reference.contentful_id] = reference;
    //console.log(referencesMap);
  });

  const options = {
    renderNode: {
      //render assets(images) from contentful
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        //console.log(node);
        const data = referencesMap[node.data.target.sys.id];
        //console.log(data);
        {
          //when console logged - it return correct value followed by undefined immediately after
          !!data && (
            <ImageWrapper>
              <GatsbyImage alt={data.title} image={data.gatsbyImageData} />
            </ImageWrapper>
          );
        }
      },
      //function -- renders all "nodes" containing raw data --  such as descriptions, and page content
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const data = referencesMap[node.data.target.sys.id];
        //if typename is contentfulHero -- render component
        switch (data.__typename) {
          case "ContentfulHero":
            return (
              <Hero
                heading={data.heading}
                subHeading={data.subheading}
                backgroundImage={data.backgroundImage.gatsbyImageData}
              />
            );
          case "ContentfulPriceGroup":
            return <PriceGroup priceOptions={data.priceOptions} />;
          default:
            return null;
        }
      },
    },
  };

  return (
    <Wrapper>{documentToReactComponents(JSON.parse(raw), options)}</Wrapper>
  );
};
