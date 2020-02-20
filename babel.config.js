module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: process.versions.node } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-macros',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
