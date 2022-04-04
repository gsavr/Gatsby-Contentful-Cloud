import React from "react";
import {
  PriceOption,
  PriceGroupWrapper,
  PriceOptionInner,
  MostPopularLabel,
} from "./style";
import { RichText } from "components";

export const PriceGroup = ({ priceOptions }) => {
  //console.log(priceOptions);
  /* const pluginImg = getImage(
    priceOptions[1].description.references[0].gatsbyImageData
  ); */

  return (
    <PriceGroupWrapper>
      {priceOptions.map((option) => {
        /* if (option.description.references[0]) {
          console.log(option.description.references[0].gatsbyImageData);
        } */
        return (
          <PriceOption key={option.id}>
            <PriceOptionInner isMostPopular={option.mostPopular}>
              {!!option.mostPopular && (
                <MostPopularLabel>Most Popular</MostPopularLabel>
              )}
              <h2>{option.title}</h2>
              <h3>${option.amountPerMonth}/mo.</h3>
              <RichText raw={option.description.raw} />
            </PriceOptionInner>
          </PriceOption>
        );
      })}
    </PriceGroupWrapper>
  );
};
