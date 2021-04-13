module.exports = {
  siteMetadata: {
    title: 'gatsby-v3-mapbox',
  },
  plugins: ['gatsby-plugin-postcss'],
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
