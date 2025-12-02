const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blockList: [
      // Block android build directories in node_modules
      /node_modules\/.*\/android\/build\/.*/,
      // Block ios build directories
      /node_modules\/.*\/ios\/build\/.*/,
      // Block Gradle directories
      /node_modules\/.*\/\.gradle\/.*/,
      // Block android build in project
      /android\/build\/.*/,
      /android\/app\/build\/.*/,
    ],
  },
  watcher: {
    additionalExts: ['cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
