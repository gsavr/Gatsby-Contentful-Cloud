const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

//will be used to create blog pages -- {contenfulPages.slug} creates them by using the contentfulPages query
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const {
    data: { contentfulBlog, allContentfulBlogPost },
  } = await graphql(`
    {
      contentfulBlog {
        postsPerPage
        slug
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
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
      }
    }
  `);
  //create a page for each individual blog post
  allContentfulBlogPost.edges.forEach((blogPost) => {
    createPage({
      path: `/${contentfulBlog.slug}/${blogPost.node.slug}`,
      context: {
        postId: blogPost.node.contentful_id,
      },
      //component that will render them
      component: path.resolve("./src/templates/BlogPost/index.js"),
    });
  });

  //create number of pages that will diaplay blogs
  const numPages = Math.ceil(
    allContentfulBlogPost.edges.length / contentfulBlog.postsPerPage
  );

  for (let i = 0; i < numPages; i++) {
    createPage({
      // if blog first page there is no additional slug -- for any additional page the slug will be the num of page
      path: `${contentfulBlog.slug}${i === 0 ? "" : `/${i + 1}`}`,
      component: path.resolve("./src/templates/PaginatedBlogPage/index.js"),
      context: {
        blogSlug: contentfulBlog.slug,
        totalPages: numPages,
        currentPage: i + 1,
        posts: allContentfulBlogPost.edges
          .map((blogPost) => {
            return blogPost.node;
          })
          //slice to get which posts are in each page (if i=0, i*postperpage=0--so atart at 0, end at 0+postsPerPage=2 --- first page will have blogs 1 and 2)
          .slice(
            i * contentfulBlog.postsPerPage,
            i * contentfulBlog.postsPerPage + contentfulBlog.postsPerPage
          ),
      },
    });
  }
};
