/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `word bowl`,
    siteUrl: `http://wordbowl.xyz`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "wordbowl.xyz",
      },
    },
  ]
}