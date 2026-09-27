const { defineConfig } = require('@rsbuild/core')
const { pluginReact } = require('@rsbuild/plugin-react')

module.exports = defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.js',
        },
    },
})