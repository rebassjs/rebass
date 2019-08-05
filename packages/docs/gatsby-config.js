const remarkPlugins = [
  require('remark-slug'),
]

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins,
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
  ],
}
