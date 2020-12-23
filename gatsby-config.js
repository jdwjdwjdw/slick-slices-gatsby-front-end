const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the mame of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xdisyh4e',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
