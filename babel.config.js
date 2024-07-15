module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '@/', // 使用 @/  代替 ./src (~指向的就是src目录)
          },
        ],
      },
    ],
  ]
  
};
