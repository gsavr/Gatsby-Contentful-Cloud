import React from "react";
import { Layout } from "components";
import { Link } from "gatsby";
import { Content, Post, Pagination, PageNumber } from "./style";

const PaginatedBlogPage = ({ pageContext }) => {
  console.log(pageContext);
  //pageContext prop is from gatsby.node.js
  return (
    <Layout>
      <Content>
        {pageContext.posts.map((post) => {
          //   console.log("slug on pagBlogPg");
          //   console.log(post);
          return (
            <Post key={post.contentful_id}>
              <div>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
              <div>{post.description}</div>
              <div>
                <small>{post.publishedDate}</small>
              </div>
            </Post>
          );
        })}
      </Content>
      <Pagination>
        {Array.from({ length: pageContext.totalPages }).map((n, i) => {
          return (
            <PageNumber key={i} isActive={i + 1 === pageContext.currentPage}>
              <Link to={`/${pageContext.blogSlug}/${i === 0 ? "" : i + 1}`}>
                {i + 1}
              </Link>
            </PageNumber>
          );
        })}
      </Pagination>
    </Layout>
  );
};

export default PaginatedBlogPage;
