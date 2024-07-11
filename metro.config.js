const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const {
    resolver: { sourceExts }
} = getDefaultConfig();

const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-sass-transformer')
    },
    resolver: {
        sourceExts: [...sourceExts, 'scss', 'sass']
    }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
