import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	pathPrefix: `/cookies`,
	siteMetadata: {
		title: `Cookie Dialog Example`,
		siteUrl: `https://softisfy.github.io/cookies`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/favicon.svg'
			}
		}
	]
};

export default config;
