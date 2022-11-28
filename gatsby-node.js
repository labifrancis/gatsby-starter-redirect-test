/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
 * @type {import('gatsby').GatsbyNode['createPages']}
 */


exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
createRedirect({
  fromPath: `/page-2/*`,
  toPath: `https://www.gatsbyjs.com/docs/*`,
  statusCode: 200,
})
