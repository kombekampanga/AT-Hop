module.exports = function (api) {
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx"];
  }
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
