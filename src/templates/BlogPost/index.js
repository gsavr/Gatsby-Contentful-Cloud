import React from "react";
import { graphql } from "gatsby";
import { Layout, RichText, Seo } from "components";

const BlogPost = ({ data: { contentfulBlogPost } }) => {
  //console.log(contentfulBlogPost);
  return (
    <Layout>
      <Seo
        title={contentfulBlogPost.title}
        description={contentfulBlogPost.description}
      />
      <RichText raw={contentfulBlogPost.pageContent.raw} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: { eq: $postId }) {
      publishedDate(formatString: "MM/DD/YYYY LT z")
      pageContent {
        raw
      }
      description
      title
      contentful_id
      slug
    }
  }
`;

export default BlogPost;
