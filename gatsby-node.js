
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
createRedirect({
  fromPath: `/page-2/*`,
  toPath: `https://www.gatsbyjs.com/docs/*`,
  statusCode: 200,
})
