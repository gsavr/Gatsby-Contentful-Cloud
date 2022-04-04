import React from "react";
import { Layout, RichText, Seo } from "components";
import { graphql } from "gatsby";

export default function ContentfulPage({ data: { contentfulPage } }) {
  //console.log(pageContent.references);

  return (
    <Layout>
      <Seo
        title={contentfulPage.title}
        description={contentfulPage.description}
      />
      {/* NO LONGER NEEDED, WAS PLACEHOLDER
      <h1>{contentfulPage.title}</h1> */}
      {/* !! makes sure that THERE IS PAGE CONTENT */}
      {!!contentfulPage.pageContent && (
        <RichText
          references={contentfulPage.pageContent.references}
          raw={contentfulPage.pageContent.raw}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      description
      pageContent {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          ... on ContentfulHero {
            __typename
            contentful_id
            heading
            subheading
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          ... on ContentfulPriceGroup {
            __typename
            contentful_id
            priceOptions {
              id
              title
              amountPerMonth
              description {
                raw
              }
              mostPopular
            }
          }
        }
      }
    }
  }
`;
