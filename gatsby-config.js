/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `word bowl`,
    siteUrl: `https://www.magic-of-words.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "word-bowl-gatsby",
      },
    },
  ]
};