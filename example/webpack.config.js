module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // way 1: typescript
      // { test: /\.tsx?$/, use: 'ts-loader' },
      // way 2: babel
      { test: /\.tsx?$/, use: 'babel-loader' },
    ],
  },
};
