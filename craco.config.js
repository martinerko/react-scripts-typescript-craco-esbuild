const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  eslint: {
    enable: false // disable eslint plugin (same as DISABLE_ESLINT_PLUGIN=true)
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin
    }
  ]
};
