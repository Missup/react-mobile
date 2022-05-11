const { override } = require("customize-cra");
const rewirePostcss = require("react-app-rewire-postcss");
module.exports = override((config, env) => {
  rewirePostcss(config, {
    plugins: () => [
      require("postcss-px2rem")({
        // 375 设计稿宽度
        remUnit: 375 / 10,
        exclude: /node-modules/i,
      }),
    ],
  });
  return config;
});
