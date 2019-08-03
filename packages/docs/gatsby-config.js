module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
  ],
}
