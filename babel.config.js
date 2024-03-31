module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@components": "./components",
            "@config": "./config",
            "@constants": "./constants",
            "@context": "./context",
            "@hooks": "./hooks",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@services": "./services",
            "@utils": "./utils",
          },
        },
      ],
    ],
  };
};